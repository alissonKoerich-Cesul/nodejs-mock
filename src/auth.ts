import jwt  from "jsonwebtoken";
import { auth } from "./config";

export function generateJwtAndfreshToken(email: string, payload:object = {}){
    const token = jwt.sign(payload, auth.secret, {
        subject: email,
        expiresIn: 30,
    });

//    const refreshToken = createRefreshToken(email);

    return{
        token,
//      refreshToken,
    }

};