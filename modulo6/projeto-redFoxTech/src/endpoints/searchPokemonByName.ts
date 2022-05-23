import { Request, Response } from "express";
import { connection } from "../connection";



export const searchPokemonByName = async (req: Request, res: Response): Promise<void> => {
    try{
        const name = req.body.name

        if(!name){
            throw new Error("passe corretamente o 'name' no body");
        }

        const pokemon = await connection.raw(`
            SELECT * FROM redfoxtech_pokemon WHERE name = "${name}";
        `)

        if(pokemon[0].length === 0){
            throw new Error("não existe um pokemon que corresponda ao 'name' passado");
        }

        res.status(200).send(pokemon[0])
    }catch(error){
        if (error instanceof Error) {
            res.status(400).send({ error: error.message })
       }
    }


}