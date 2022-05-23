import { Request, Response } from "express";
import { connection } from "../connection";



export const searchPokemonByGeneration = async (req: Request, res: Response): Promise<void> => {
    try{
        const generation = req.body.generation

        if(!generation){
            throw new Error("passe corretamente o 'generation' no body");
        }

        const pokemon = await connection.raw(`
            SELECT * FROM redfoxtech_pokemon WHERE generation = "${generation}";
        `)

        if(pokemon[0].length === 0){
            throw new Error("não existe um pokemon que corresponda ao 'generation' passado");
        }

        res.status(200).send(pokemon[0])
    }catch(error){
        if (error instanceof Error) {
            res.status(400).send({ error: error.message })
       }
    }


}