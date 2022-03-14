import { Request, Response } from "express"
import UserBusiness from "../business/UserBusiness"


export type inputDTO = {
    name:string ,
    email:string ,
    password:string 
}

export type inputLoginDTO = {
    email:string ,
    password:string 
}

const userBusiness = new UserBusiness()

export default class UserController{


    SignUp = async (req: Request, res: Response): Promise<void> => {
        try {
            let message = "Success!"
           const { name, email, password } = req.body
     
           const input: inputDTO = {name, email, password}

           const token = await userBusiness.SignUp(input)
     
           res.status(201).send({ message, token })
        } catch (error:any) {
           res.statusCode = 400
           let message = error.sqlMessage || error.message
     
           res.send({ message })
        }
     }
     
     
    Login = async  (req: Request, res: Response): Promise<void> => {
        
            try {
               let message = "Success!"
               const { email, password } = req.body

               const input: inputLoginDTO = { email, password}

               const token = await userBusiness.Login(input)
         
               res.status(200).send({ message, token })
         
            } catch (error:any) {
               let message = error.sqlMessage || error.message
               res.statusCode = 400
         
               res.send({ message })
            }
    }



}