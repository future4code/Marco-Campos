import { connection } from "../connection"
import { TABLE_PRODUCT, TABLE_TAGS } from "../Tables/sqlTables"





class ProductDatabase {

    CreateProduct = async (id:string, name:string) => {
        await connection.raw(`
        INSERT INTO ${TABLE_PRODUCT}
        VALUES(
            "${id}",
            "${name}"
        );
    `)
    }

    CreateTags = (id:string, tags:string[]) => {
        const postTag = async (id: string, tag: string) =>{
            await connection.raw(`
            INSERT INTO ${TABLE_TAGS}
            VALUES(
                "${id}",
                "${tag}"
            )
            `)
        }

        tags.forEach((tag)=>{
            postTag(
                id,
                tag.toLocaleLowerCase()      
                    .replace(/[óôõò]/gi,"o")
                    .replace(/[áàâã]/gi,"a")
                    .replace(/[íîì]/gi,"i")
                    .replace(/[úùû]/gi,"u")
                    .replace(/[éèê]/gi,"e"))
        })
    }

}

export const productDatabase = new ProductDatabase()