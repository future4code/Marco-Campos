import { Request, Response } from "express";
import { connection } from "../connection";



export const searchPokemonById = async (req: Request, res: Response): Promise<void> => {
    try{
        const id = req.body.id

        if(!id){
            throw new Error("passe corretamente o 'id' no body");
        }

        const pokemon = await connection.raw(`
            SELECT * FROM redfoxtech_pokemon WHERE id = "${id}";
        `)

        if(pokemon[0].length === 0){
            throw new Error("não existe um pokemon que corresponda ao 'id' passado");
        }

        res.status(200).send(pokemon[0])
    }catch(error){
        if (error instanceof Error) {
            res.status(400).send({ error: error.message })
       }
    }


}
