import { ProductDb } from "../model/product";
import BaseDatabase from "./baseDatabase";




class ProductData extends BaseDatabase {

    getProductById = async (id: string): Promise<ProductDb> => {

        const verify = await BaseDatabase.connection("amaro_product")
        .select("*")
        .where({id})

        return verify[0]
    }

    getTagsById = async (id: string): Promise<object> => {
        const tags = await BaseDatabase.connection.raw(`
            SELECT * FROM amaro_product JOIN amaro_tags ON amaro_product.id = amaro_tags.product_id WHERE id = "${id}";
        `)

        const arrTag:string[] = []

        tags[0].forEach((tag: any) => {
            arrTag.push(tag.name)
        })

        return arrTag
    }

    createProduct = async (id: string, name: string) => {
        await BaseDatabase.connection.raw(`
            INSERT INTO amaro_product
            VALUES(
                "${id}",
                "${name}"
            );
        `)
    }

    createTag = (id: string, tags: string[]) => {
        
        const createTag = async (id: string, tag: string) => {
            await BaseDatabase.connection.raw(`
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
    }

}

export const productData = new ProductData()