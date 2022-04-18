import { Request, Response } from "express";
import { connection } from "../connection";




export const getProductById = async (req: Request, res: Response): Promise<void> => {
    try{

        const id = req.body.id

        if(!id){
            throw new Error("passe o 'id' corretamente no body")
        }

        const productData = await connection("amaro_product")
        .select("*")
        .where({id})

        console.log(productData)

        if(!productData[0]){
            throw new Error("nao existe produto com o id correspondente")
        }

        const tagData = await connection.raw(`
            SELECT * FROM amaro_product JOIN amaro_tags ON amaro_product.id = amaro_tags.product_id WHERE id = "${id}";
        `)

        const arrTag:string[] = []

        tagData[0].forEach((tag: any) => {
            arrTag.push(tag.name)
        })

        const product = {
            id: productData[0].id,
            name: productData[0].name, 
            tag: arrTag
        }

        console.log(product)

            res.status(200).send(product)
    }catch(error){
        if (error instanceof Error) {
            res.status(400).send({ error: error.message })
        }
    }
}