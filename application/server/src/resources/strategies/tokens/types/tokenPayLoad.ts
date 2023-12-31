import { JwtPayload } from "jsonwebtoken";

interface TokenPayload extends JwtPayload {
    id: Number;
    username: String;
}

export default TokenPayload;