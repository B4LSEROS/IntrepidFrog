import { Router } from "express";
import "express-async-errors";
import { userController } from "./instanceControllers";

const routerUser = Router();

routerUser.post("/login", userController.login);
routerUser.get("/balance", userController.getBalance);
routerUser.post("/", userController.register);

export default routerUser;
