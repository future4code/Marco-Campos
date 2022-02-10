import { Request, Response } from "express"
import { connection } from "../data/connection"
import { users } from "../types"

export const getQueryUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const users:users[] = await selectQuery(req.query.name)

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

export default async function selectQuery(query: any):Promise<any> {
   const result = await connection.raw(`
   SELECT * FROM aula48_exercicio WHERE name = "${query}";
   `)

   return result[0]
}