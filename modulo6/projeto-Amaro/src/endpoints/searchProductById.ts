import { Request, Response } from "express";
import { connection } from "../connection";



const TABLE_NAME = "amaro_product"

export const SearchProductById = async (req: Request, res: Response): Promise<void> => {

    try{
        let message = "Success!"

        const id = req.query.id
        const name = req.query.name
        const tag = req.query.tag

        if(!id || !name || !tag ){
            const products = await connection(`${TABLE_NAME}`)
            .select('*')
            res.status(200).send(`"nao foram passados parametros de pesquisa", ${products}`)
        }

        



        res.status(201).send(message)
    }catch(error){
        if (error instanceof Error) {
            res.status(400).send({ error: error.message })
       }
    }

} 