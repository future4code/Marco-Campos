import { Request, Response } from "express"
import connection from "../data/connection"
import { postAddressInfo } from "../services/postAddressInfo"

export const createUser = async (req: Request, res: Response) =>{
    try {
    const {cep, numero} = req.body

    const address = await postAddressInfo(cep, numero)
    if(!address){
        throw new Error("Ouve um problema no serviço getAddressInfo")
    }

    await connection.raw(`
    INSERT INTO user_address (cep, street, number, complement, neighborhood, state, city)
    VALUES (
    ${address.cep}
    ${address.street}
    ${address.number}
    ${address.complement}
    ${address.neighborhood}
    ${address.state}
    ${address.city}
    );
    `)

    res.send({ address })    

    } catch (error) {
        if(error instanceof Error){
            res.send({error, message: error.message})
            console.log({error, message: error.message})
        } else {
            res.send({message: "Erro inesperado"})
        }
    }
}