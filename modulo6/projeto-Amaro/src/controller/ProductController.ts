import { Request, Response } from "express"
import { productBusiness } from "../business/ProductBusiness"


class ProductController {

    CreateProduct = async (req:Request, res:Response): Promise<void> =>{
        try{
            let message = "Produto cadastrado com sucesso!"

            const name:string =req.body.name
            const tags:string[] = req.body.tags
            const id:string = req.body.id

            await productBusiness.CreateProduct(id, name, tags)

            res.status(201).send(message)
        }catch(error){
            if (error instanceof Error) {
                res.status(400).send({ error: error.message })
            }
        }

    }

}

export const productController = new ProductController()