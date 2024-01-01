import { JwtPayload } from "jsonwebtoken";

interface TokenPayload extends JwtPayload {
    id: number;
    username: string;
}

export default TokenPayload;