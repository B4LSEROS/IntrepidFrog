import { Request, Response } from "express";
import UserResource from "../resources/UserResource";
import { StatusCodes } from "http-status-codes";

class user {
  // Type definiton of service
  private service: UserResource;

  constructor() {
    this.service = new UserResource();

    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.getBalance = this.getBalance.bind(this);
  }

  async login(res: Response, req: Request): Promise<void> {
    const dataUser = await this.service.login(req.body);

    res.status(StatusCodes.OK).json(dataUser);
  }

  async register(res: Response, req: Request): Promise<void> {
    await this.service.register(req.body);

    res.status(StatusCodes.CREATED).json({
      message: "User sucessfully created.",
    });
  }

  async getBalance(res: Response, req: Request): Promise<void> {
    const balance = await this.service.getBalance(req.headers.authorization);

    res.status(StatusCodes.OK).json({
      balance,
    });
  }
}

export default user;
