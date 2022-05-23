import { Request, Response } from "express"
import { pokemonBusiness } from "../business/pokemonBusiness"
import { Generation, Id, Name, Type } from "../model/pokemon"


class PokemonController {

    searchPokemonById = async (req: Request, res: Response): Promise<void> => {
        try{
            const input = req.body.id

            const id: Id = input
            
            const pokemon = await pokemonBusiness.searchPokemonById(id)

            res.status(200).send(pokemon)
        }catch(error){
            if (error instanceof Error) {
                res.status(400).send({ error: error.message })
           }
        }
    }

    searchPokemonByName = async (req: Request, res: Response): Promise<void> => {
        try{
            const input = req.body.name

            const name: Name = input
            
            const pokemon = await pokemonBusiness.searchPokemonByName(name)

            res.status(200).send(pokemon)
        }catch(error){
            if (error instanceof Error) {
                res.status(400).send({ error: error.message })
           }
        }
    }

    searchPokemonByType = async (req: Request, res: Response): Promise<void> => {
        try{
            const input = req.body.type

            const type: Type = input
            
            const pokemon = await pokemonBusiness.searchPokemonByType(type)

            res.status(200).send(pokemon)
        }catch(error){
            if (error instanceof Error) {
                res.status(400).send({ error: error.message })
           }
        }
    }

    searchPokemonByGeneration = async (req: Request, res: Response): Promise<void> => {
        try{
            const input = req.body.generation

            const generation: Generation = input
            
            const pokemon = await pokemonBusiness.searchPokemonByGeneration(generation)

            res.status(200).send(pokemon)
        }catch(error){
            if (error instanceof Error) {
                res.status(400).send({ error: error.message })
           }
        }
    }

}

export const pokemonController  = new PokemonController()