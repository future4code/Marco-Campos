import { Request, Response } from "express"
import { connection } from "../connection"
import { ProductInputDTO, ProductNameInputDTO, ProductTagsInputDTO } from "../model/Product"


const TABLE_PRODUCT = "amaro_product"
const TABLE_TAGS = "amaro_tags"

export const CreateProduct  = async (req: Request ,res: Response): Promise<void> => {
   
    try{
        let message = "Produto cadastrado com sucesso!"

        const inputName: ProductNameInputDTO = {
            id: req.body.id,
            name: req.body.name 
        }
        const inputTags: ProductTagsInputDTO = {
            tags:req.body.tags
        }

        const id = req.body.id
        
        if(!inputName.id || !inputName.name || !inputTags.tags){
            throw new Error("passe corretamente 'id', 'name' e 'tags' no Body")
        }

        if(inputTags.tags.length === 0){
            throw new Error("passe uma 'tag' válida")
        }

        const id2 = await connection(`${TABLE_PRODUCT}`)
        .select("*")
        .where({id})

        console.log(id2)

        if(id2[0]){
            throw new Error("ja existe um produto com esse id!");
        }

        await connection.raw(`
            INSERT INTO ${TABLE_PRODUCT}
            VALUES(
                "${inputName.id}",
                "${inputName.name}"
            );
        `)

        const postTag = async (id: string, tag: string) =>{
            await connection.raw(`
            INSERT INTO ${TABLE_TAGS}
            VALUES(
                "${id}",
                "${tag}"
            )
            `)
        }

        inputTags.tags.forEach((tag)=>{
            postTag(
                inputName.id,
                tag.toLocaleLowerCase()      
                    .replace(/[óôõò]/gi,"o")
                    .replace(/[áàâã]/gi,"a")
                    .replace(/[íîì]/gi,"i")
                    .replace(/[úùû]/gi,"u")
                    .replace(/[éèê]/gi,"e"))
        })

        res.status(201).send(message)
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send({ error: error.message })
        }
    }
}
