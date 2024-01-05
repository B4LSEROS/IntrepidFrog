import { Router } from "express";
import "express-async-errors";
import { transactionController } from "./instanceControllers";

const routerTransaction = Router();

routerTransaction.post("/", transactionController.register);
routerTransaction.get("/", transactionController.list);

export default routerTransaction;
