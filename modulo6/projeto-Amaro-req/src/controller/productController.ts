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

    getProductByName = async (req: Request, res: Response): Promise<void> => {
        try{
            const name = req.body.name

            const product = await productBusiness.getProductByName(name)

            res.status(200).send(product)

        }catch(error){
            if (error instanceof Error) {
                res.status(400).send({ error: error.message })
            }
        }
    }

    getProductByTag = async (req: Request, res: Response): Promise<void> => {
        try{
            const tag = req.body.tag

            const product = await productBusiness.getProductByTag(tag)

            res.status(200).send(product)
        }catch(error){
            if (error instanceof Error) {
                res.status(400).send({ error: error.message })
            }
        }
    }

    getAllProducts = async (req: Request, res: Response): Promise<void> => {
        try{
            const product = await productBusiness.getAllProduct()

            res.status(200).send(product)
        }catch(error){
            if (error instanceof Error) {
                res.status(400).send({ error: error.message })
            }
        }
    }

}

export const productController = new ProductController()