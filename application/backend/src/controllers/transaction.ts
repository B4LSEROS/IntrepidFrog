import { StatusCodes } from "http-status-codes";
import TransactionResource from "../resources/TransactionResource";
import { Response, Request } from 'express';

class transaction {

    private service: TransactionResource;

    constructor() {
        this.service = new TransactionResource();

        this.register = this.register.bind(this);
        this.list = this.list.bind(this);
    }

    async register (res: Response, req: Request): Promise<void> {
        await this.service.register(req.headers.authorization, req.body);

        res.status(StatusCodes.CREATED).json(
            {
                message: "Successful Transfer",
            }
        );
    }

    async list (res: Response, req: Request): Promise<void> {
        const { type, from, to } = req.query;

        const transfers = await this.service.list(
            req.headers.authorization,
            type as string | undefined,
            from  as string | undefined,
            to as string | undefined
        );

        res.status(StatusCodes.OK).json(transfers);
    }
}

export default transaction;

