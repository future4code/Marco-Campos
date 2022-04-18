import { Request, Response } from "express";
import { connection } from "../connection";





export const getAllProducts = async (req: Request,res: Response): Promise<void> => {
    try{
        const productData = await connection.raw(`
            SELECT * FROM amaro_product JOIN amaro_tags ON amaro_product.id = amaro_tags.product_id ORDER BY id;
        `)

        const arrId: string[] = []

        productData[0].forEach((tag: any) => {
            arrId.push(tag.id)
        })

        const uniqId = [... new Set(arrId)]

        console.log(uniqId)

        const arrProducts: Object[] = []

        const getProduct = async (id: string[]) => {

            const productData = await connection.raw(`
                SELECT * FROM amaro_product WHERE id = "${id}";
            `)

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

            arrProducts.push(product)

        }

        arrId.forEach((id: any) => {
            getProduct(id)
        })

        console.log(arrProducts)


        // res.status(200).send(arrProducts)
    }catch(error){
        if (error instanceof Error) {
            res.status(400).send({ error: error.message })
        }
    }
}