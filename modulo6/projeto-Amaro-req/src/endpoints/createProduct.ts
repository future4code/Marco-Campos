import { Request, Response } from "express";
import { connection } from "../connection";


export const CreateProduct = async (req: Request,res: Response): Promise<void> => {
    try {
        
        const {id, name, tags} = req.body

        if(!id || !name || !tags){
            throw new Error("passe corretamente 'id', 'name' e 'tags' no Body");
        }

        if(tags.length === 0){
            throw new Error("passe uma 'tag' válida");
        }

        const verify = await connection("amaro_product")
        .select("*")
        .where({id})


        if(verify[0]){
            throw new Error("ja existe um produto com esse id!");
        }

        await connection.raw(`
            INSERT INTO amaro_product
            VALUES(
                "${id}",
                "${name}"
            );
        `)

        const createTag = async (id: string, tag: string) => {
            await connection.raw(`
                INSERT INTO amaro_tags
                VALUES(
                    "${id}",
                    "${tag}"
                );
            `)
        }

        tags.forEach((tag: string)=>{
            createTag(
                id,
                tag.toLocaleLowerCase()      
                .replace(/[óôõò]/gi,"o")
                .replace(/[áàâã]/gi,"a")
                .replace(/[íîì]/gi,"i")
                .replace(/[úùû]/gi,"u")
                .replace(/[éèê]/gi,"e")
                )
        })

        res.status(201).send("produto criado!")
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send({ error: error.message })
        }
    }
}