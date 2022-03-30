import { Request, Response } from "express"
import { connection } from "../data/connection"
import { User } from "../types"


export async function createUser (req: Request, res: Response): Promise<void> {
   try {
      const {name, email, password} = req.body
      const id = new Date().getTime().toString()
      
      const result = await connection.raw(`
      INSERT INTO User_ecommerce 
      VALUES (
       "${id}"
       "${name}",
       "${email}",
       "${password}"
      );
      `)

      const users = result.map(toUser)

      res.status(200).send(users)

   } catch (error) {
      if(error instanceof Error){
         res.send({error, message: error.message})
         console.log({error, message: error.message})
     } else {
         res.send({message: "Erro inesperado"})
     }
   }
}

const toUser = (input: any): User => {
   return {
      id: input.id,
      name: input.name,
      email: input.email,
      password: input.password
   }
}

