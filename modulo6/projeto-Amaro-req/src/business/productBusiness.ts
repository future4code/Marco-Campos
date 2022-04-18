import { verify } from "crypto";
import { productData } from "../data/productData";




class ProductBusiness {

    createProduct = async (id: string, name: string, tags: string[]): Promise<void> => {
        if(!id || !name || !tags){
            throw new Error("passe corretamente 'id', 'name' e 'tags' no Body");
        }

        if(tags.length === 0){
            throw new Error("passe uma 'tag' válida");
        }

        const product = await productData.getProductById(id) 

        if(product){
            throw new Error("ja existe um produto com esse id!");
        }

        await productData.createProduct(id, name)

        productData.createTag(id, tags)
    }


    getProductById = async (id:string): Promise<object> => {
        if(!id){
            throw new Error("passe o 'id' corretamente no body")
        }

        const getProduct = await productData.getProductById(id)

        if(!getProduct){
            throw new Error("nao existe produto com o id correspondente");
        }

        const tags = await productData.getTagsById(id)

        const product = {
            id: getProduct.id,
            name: getProduct.name, 
            tag: tags
        }

        return product
    }
}

export const productBusiness = new ProductBusiness()