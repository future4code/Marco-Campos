import { connection } from "../connection"
import { productDatabase } from "../data/ProductDatabase"
import { TABLE_PRODUCT } from "../Tables/sqlTables"




class ProductBusiness {

    CreateProduct = async (id:string, name:string, tags:string[]): Promise<void> =>{

            if(!id || !name || !tags){
                throw new Error("passe corretamente 'id', 'name' e 'tags' no Body")
            }

            if(tags.length === 0){
                throw new Error("passe uma 'tag' válida")
            }

            const Id = await connection(`${TABLE_PRODUCT}`)
            .select("*")
            .where({id})

            if(Id[0]){
                throw new Error("ja existe um produto com esse id!");
            }

            await productDatabase.CreateProduct(id, name)

            await productDatabase.CreateTags(id, tags)
    }

}

export const productBusiness = new ProductBusiness()