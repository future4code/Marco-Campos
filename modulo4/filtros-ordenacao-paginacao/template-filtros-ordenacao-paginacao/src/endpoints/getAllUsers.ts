import { Request, Response } from "express"
import { connection } from "../data/connection"
import { users } from "../types"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const users:users[] = await selectAllUsers()

      if(!users.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      if(error instanceof Error){
         res.send(error.message)
      }
   }
}

export default async function selectAllUsers():Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `)

   return result[0]
}