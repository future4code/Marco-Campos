import { Request, Response } from "express"
import { connection } from "../connection"
import { ProductInputDTO } from "../model/Product"





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

        await connection("product_amaro")
        .select("*")
        .where({id: input.id})








        res.status(201).send(message)
    } catch (error) {
        res.status(400).send(error)
    }
}