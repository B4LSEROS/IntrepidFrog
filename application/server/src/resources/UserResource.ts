import * as bcrypt from "bcryptjs";
import database from "../db/models/Index";
import Account from "../db/models/Account";
import User, { IUserLogin, IUserRegister } from "../db/models/User";
import NotFoundError from "../utilities/errors/NotFoundError";
import UnApprovedError from "../utilities/errors/UnauthorizedError";
import UnprocessableError from "../utilities/errors/UnprocessableEntityError ";
import Token from "./strategies/tokens/Token";
import UserValidator from "./strategies/validators/UserValidator";

const UNAVAILABLE_USERNAME = "Username already in use.";
const UNAUTHORIZED_MESSAGE = "Username is not correct";

class UserResource {

  private repository = User;
  private repositoryAccount = Account;
  private validator = UserValidator;
  private token = Token;

  // Methods declarations and implementations:
  async register(body: IUserRegister): Promise<void> {
    //Instance of the class, object, of type UserResource accesses the key term this.
    this.validator.register(body);

    const isUserAvailable = await User.findOne({
      where: { username: body.username },
    });

    if (isUserAvailable) throw new UnprocessableError(UNAVAILABLE_USERNAME);

    const transaction = await database.transaction();

    try {
      const startingBalance = 100.0;
      const { id: accountId } = await this.repositoryAccount.create(
        {
          balance: startingBalance,
        },
        { transaction }
      );

      const encryptPassword = await bcrypt.hash(body.password, 12);

      await this.repository.create(
        {
          ...body,
          password: encryptPassword,
          accountId: accountId,
        },
        { transaction }
      );

      transaction.commit();
    } catch (error) {
      transaction.rollback();
      throw error;
    }
  }


  async login(
    body: IUserLogin
  ): Promise<{ id: number; username: string; token: string }> {
    this.validator.login(body);

    const user = await this.repository.findOne({
      where: {
        username: body.username,
      },
    });

    if (!user) throw new UnApprovedError(UNAUTHORIZED_MESSAGE);

    const isPassValid = await bcrypt.compare(body.password, user.password);

    if (!isPassValid) throw new UnApprovedError(UNAUTHORIZED_MESSAGE);

    const payload = {
      id: user.id,
      username: user.username,
    };

    const token = await this.token.create(payload);

    return { ...payload, token };
  }
  

  async getBalance(authorization: string | undefined): Promise<number> {
    const { id } = await this.token.verify(authorization);

    const user = await this.repository.findByPk(id);
    const account = await this.repositoryAccount.findByPk(user?.accountId);

    if (!user || !account) {
      throw new NotFoundError("Could not find the account.");
    }

    return account.balance;
  }
}

export default UserResource;
