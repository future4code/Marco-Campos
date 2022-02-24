import { Request, Response } from "express";
import { connection } from "../data/connection";
import { IdGenerator } from "../services/IdGenerator";


export const signUp = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
    try{
        const {name, email, password} = req.body
        const id = IdGenerator()

        if(!name || !email || !password){
            errorCode = 422
            throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
        }

        const user = await connection.raw(`
        SELECT * FROM User_cookenu WHERE email = "${email}";
        `)

        if (user) {
           errorCode = 409
           throw new Error("Email já cadastrado")
        }

        await connection.raw(`
            INSERT INTO User_cookenu 
            VALUES (
              "${id}",
              "${name}",
              "${email}",
              "${password}"
            );
        `)
        
        res.status(errorCode = 201).send("sucesso!")
    }
    catch(error: any){

        if (errorCode === 200 ) {
           res.status(500).send({ message: "Internal server error" })
        }
        else {
           res.send({ message: error.message || error.sqlMessage })
        }

    }
}