import { Request, Response } from "express"
import { connection } from "../connection"
import { ProductInputDTO } from "../model/Product"


const TABLE_NAME = "amaro_product"

export const CreateProduct  = async (req: Request ,res: Response): Promise<void> => {
   
    try{
        let message = "Success!"

        const input: ProductInputDTO = {
            id: req.body.id,
            name: req.body.name, 
            tags:req.body.tags
        }

        if(!input.id || !input.name || !input.tags){
            throw new Error("passe corretamente 'id', 'name' e 'tags' no Body")
        }

        if(input.tags.length === 0){
            throw new Error("passe uma 'tag' válida")
        }

        const id = await connection(`${TABLE_NAME}`)
        .select("*")
        .where({id: input.id})

        if(!id){
            throw new Error("ja existe um produto com esse id!");
        }

        await connection(`${TABLE_NAME}`)
        .insert(`
        ${input.id},
        ${input.name},
        ${input.tags}
        `)

        res.status(201).send(message)
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send({ error: error.message })
        }
    }
}
