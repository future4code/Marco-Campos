import { Request, Response } from "express"
import { productBusiness } from "../business/productBusiness"




class ProductController {

    createProduct = async (req: Request, res: Response): Promise<void> => {
        try {
            const {id, name, tags} = req.body

            await productBusiness.createProduct(id, name, tags)

            res.status(201).send("produto criado!")
        } catch(error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message })
            }
        }
    }

    
    getProductById = async (req: Request, res: Response): Promise<void> => {
        try{
            const id = req.body.id

            const product = await productBusiness.getProductById(id)

            res.status(200).send(product)
        }catch(error){
            if (error instanceof Error) {
                res.status(400).send({ error: error.message })
            }
        }
    }

}

export const productController = new ProductController()