import { Request, Response } from "express";
import { isTaggedTemplateExpression } from "typescript";
import { connection } from "../connection";
import { Id } from "../model/Product";



const TABLE_NAME = "amaro_product"
const TABLE_TAGS = "amaro_tags"

export const SearchProductById = async (req: Request, res: Response): Promise<void> => {

    try{
        let message = "Success!"

            const {productId, name, tag} = req.body

            if(!name|| !tag){
                const product = await connection.raw(`
                    SELECT * FROM ${TABLE_NAME} WHERE id = "${productId}"
                `)
                const tags = await connection.raw(`
                    SELECT * FROM ${TABLE_TAGS} WHERE product_id = "${productId}"; 
                `)
            }

            if(!productId || !tag){
                const product = await connection.raw(`
                    SELECT * FROM ${TABLE_NAME} WHERE name = "${name}"
                `)
                const id = product[0].id
                const tags = await connection.raw(`
                    SELECT * FROM ${TABLE_TAGS} WHERE product_id = "${id}"; 
                `)
            }

            if(!name || !productId){

                const tags = await connection.raw(`
                    SELECT * FROM ${TABLE_TAGS} WHERE name = "${tag}"; 
                `)

                const id = tags[0].product_id

                const product = await connection.raw(`
                    SELECT * FROM ${TABLE_NAME} WHERE id = "${id}"
                `)
            }


        res.status(200).send(message, )
    }catch(error){
        if (error instanceof Error) {
            res.status(400).send({ error: error.message })
       }
    }

} 




// const searchTag =async (id: string) => {
//     return await connection.raw(`
//         SELECT * FROM ${TABLE_TAGS} WHERE product_id = "${id}";
//     `)
// }

// // const retorno = searchTag(id)