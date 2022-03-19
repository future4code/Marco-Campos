import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types";
import dotenv from 'dotenv'

dotenv.config()

export const GenerateToken = (payload: AuthenticationData): string => {
    return jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        {expiresIn: "24h"}
    )
}

export const GetTokenData = (token: string): AuthenticationData | null => {
    try{
        const tokenData = jwt.verify(
            token,
            String(process.env.JWT_KEY)
        ) as AuthenticationData
        return tokenData
    }catch (error){
        console.log(error)
        return null
    }
}