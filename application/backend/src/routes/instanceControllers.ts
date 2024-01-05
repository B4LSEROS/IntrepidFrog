import user from "../controllers/user";
import transaction from "../controllers/transaction";

const userController = new user();
const transactionController = new transaction();

export { userController, transactionController };
