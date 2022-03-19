import { inputDTO, inputLoginDTO } from "../controller/UserController"
import UserData from "../data/UserData"
import { generateToken } from "../services/Authenticator"
import { compare, hash } from "../services/HashManager"
import { generateId } from "../services/IdGenerator"
import { user } from "../types/types"


const userDatabase = new UserData()

export default class UserBusiness{

    SignUp = async (input: inputDTO): Promise<string> =>{
    
           if (!input.name || !input.email || !input.password) {
            const message = '"name", "email" and "password" must be provided'
            throw new Error(message)
           }

           const user = await userDatabase.UserByEmail(input.email)

           if(user){
            const message = 'email ja existe'
            throw new Error(message)
           }
   
         const id: string = generateId()
   
         const cypherPassword = await hash(input.password);

         const newUser:user = {
            id: id,
            name: input.name,
            email: input.email,
            password: cypherPassword
         }

         await userDatabase.InsertUser(newUser)
        
         const token: string = generateToken({ id })

         return token
    }

    Login = async (input: inputLoginDTO): Promise<string> =>{

      if (!input.email || !input.password) {
        const message = '"email" and "password" must be provided'
        throw new Error(message)
     }

     const userEmail = await userDatabase.UserByEmail(input.email)

     if (!userEmail) {
        const message = "Invalid credentials"
        throw new Error(message)
     }

     const user: user = {
      id: userEmail.id,
      name: userEmail.name,
      email: userEmail.email,
      password: userEmail.password
     }

     const passwordIsCorrect: boolean = await compare(input.password, user.password)

     if (!passwordIsCorrect) {
        const message = "Invalid credentials"
        throw new Error(message)
     }

     const token: string = generateToken({
        id: user.id
     })

     return token
    }


}

   
