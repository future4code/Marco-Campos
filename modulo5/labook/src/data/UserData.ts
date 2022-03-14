import { user } from "../types/types";
import BaseDatabase from "./BaseDatabase";



export default class UserData extends BaseDatabase{

    InsertUser = async (user:user) => {
    await UserData.connection('labook_users')
        .insert({
           id: user.id ,
           name: user.name ,
           email: user.email ,
           password: user.password
        })
    }



    UserByEmail = async (email: string):Promise<any> => {
        const user = await UserData.connection('labook_users')
        .select("*")
        .where({email})

        return user[0]
    }
}