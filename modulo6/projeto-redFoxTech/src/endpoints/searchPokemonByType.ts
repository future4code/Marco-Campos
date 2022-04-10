import { Request, Response } from "express";
import { connection } from "../connection";



export const searchPokemonByType = async (req: Request, res: Response): Promise<void> => {
    try{
        const type = req.body.type

        if(!type){
            throw new Error("passe corretamente o 'type' no body");
        }

        const pokemon = await connection.raw(`
            SELECT * FROM redfoxtech_pokemon WHERE type = "${type}";
        `)

        if(pokemon[0].length === 0){
            throw new Error("não existe um pokemon que corresponda ao 'type' passado");
        }

        res.status(200).send(pokemon[0])
    }catch(error){
        if (error instanceof Error) {
            res.status(400).send({ error: error.message })
       }
    }
}