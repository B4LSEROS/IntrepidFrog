import { Op } from "sequelize";
import TransactionValidator from "./strategies/validators/TransactionValidator";
import Token from "./strategies/tokens/Token";
import UnprocessableError from "../utilities/errors/UnprocessableEntityError ";
import NotFoundError from "../utilities/errors/NotFoundError";
import User from "../db/models/User";
import Account from "../db/models/Account";
import database from "../db/models/Index";
import Transfer, 
{ ITransfer, 
  ITransferRegister 
} from "../db/models/Transfers";


const OPTIONS = {
  attributes: { exclude: ['debitedAccountId', 'creditedAccountId'] },
  include: [
    {
      model: Account,
      as: 'debitedAccount',
      attributes: ['id'],
      include: [{ model: User, as: 'user', attributes: ['id', 'username'] }],
    },
    {
      model: Account,
      as: 'creditedAccount',
      attributes: ['id'],
      include: [{ model: User, as: 'user', attributes: ['id', 'username'] }],
    },
  ],
};


class TransactionResource {
  
    private repository = Transfer;
    private repositoryUser = User;
    private repositoryAccount = Account;
    private validator = TransactionValidator;
    private moduleToken = Token;

    async register (
        authorization: string | undefined,
        body: ITransferRegister
    ): Promise<void> {
        this.validator.register(body);

        const { id } = await this.moduleToken.verify(authorization);

        const userDebited = await this.repositoryUser.findByPk(id);
        const accountDebited = await this.repositoryAccount.findByPk(
            userDebited?.accountId
        );
        const userCredited = await this.repositoryUser.findOne({
            where: {username: body.username},
        });
        const accountCredited = await this.repositoryAccount.findByPk(
            userCredited?.accountId
        );

        if (!accountDebited || !accountCredited) {
            throw new NotFoundError(
                "Input of transaction invalid. Please verify if your username is correct."
            );
        }

        if (accountDebited.balance < body.value) {
            throw new UnprocessableError(
                "Insufficient funds to fulfill the transaction."
            );
        }

        if (accountDebited.id === accountCredited.id) {
            throw new UnprocessableError(
                "It is not possible to make a transaction to the same account."
            );
        }

        const transaction = await database.transaction();

        try {
            await this.repository.create(
                {
                    debitedAccountId: id,
                    creditedAccountId: accountCredited.id,
                    value: body.value,
                },
                { transaction }
            );

            await accountDebited.update(
                { balance: accountDebited.balance - body.value},
                {transaction}
            );

            await accountCredited.update(
                { balance: accountCredited.balance},
                { transaction }
            );

            transaction.commit();
            } catch (error) {
              transaction.rollback();
              throw error;
            }
        }

        async list (
          authorization: string | undefined,
          type: string | undefined,
          from: string | undefined,
          to: string | undefined,
        ): Promise<ITransfer[]> {

          const { id } = await this.moduleToken.verify(authorization);

          let transactions: ITransfer[] = [];
          let date = {};

          if (from) {
            const dateStart = new Date(from);
            const dateEnd = to ? new Date(to) : new Date();

            date = {
              createdAt: {[Op.between]: [dateStart, dateEnd]} 
            };
          }

          switch (type) {
            case 'transferOut': await this.repository.findAll(
              {
                order: [['createdAt', 'DESC']],
                where: {debitedAccountId: id, ...date},
                ...OPTIONS,
              });
              break;

              case 'cashin':
                transactions = await this.repository.findAll({
          order: [['createdAt', 'DESC']],
          where: { creditedAccountId: id, ...date },
          ...OPTIONS,
        });
        break;

      default:
        transactions = await this.repository.findAll({
          order: [['createdAt', 'DESC']],
          where: {
            [Op.or]: [{ debitedAccountId: id }, { creditedAccountId: id }],
            ...date,
          },
          ...OPTIONS,
        });
        break;
    }

    return transactions;
  }
}

export default TransactionResource;
