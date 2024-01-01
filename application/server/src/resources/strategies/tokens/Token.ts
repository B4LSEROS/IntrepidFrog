import * as jwt from 'jsonwebtoken';
import TokenPayload from './types/tokenPayLoad';
import UnApprovedError from '../../../utilities/errors/UnauthorizedError';

class Token {
    static async create(payload: TokenPayload): Promise<string> {
        const token = jwt.sign(payload, String(process.env.JWT_SECRET),
        {
            expiresIn: '36h',
        });

        return token;
    }

    static async verify(authorization: string | undefined): Promise<TokenPayload> {
        if (!authorization) throw new UnApprovedError("Token cannot be found");

        const token = authorization;
        const payload = jwt.verify(token, String(process.env.JWT_SECRET));

        return payload as TokenPayload;
    }
}

export default Token;