import { connection } from "../connection"
import { Generation, Id, Name, Type } from "../model/pokemon"


class PokemonData {
    searchPokemonById = async (id: Id): Promise<[]> => {
        const pokemon = await connection.raw(`
            SELECT * FROM redfoxtech_pokemon WHERE id = "${id}";
        `)
        return pokemon[0]
    }

    searchPokemonByName = async (name: Name): Promise<[]> => {
        const pokemon = await connection.raw(`
            SELECT * FROM redfoxtech_pokemon WHERE name = "${name}";
        `)
        return pokemon[0]
    }

    searchPokemonByType = async (type: Type): Promise<[]> => {
        const pokemon = await connection.raw(`
            SELECT * FROM redfoxtech_pokemon WHERE type = "${type}";
        `)
        return pokemon[0]
    }

    searchPokemonByGeneration = async (generation: Generation): Promise<[]> => {
        const pokemon = await connection.raw(`
        SELECT * FROM redfoxtech_pokemon WHERE generation = "${generation}";
    `)
    return pokemon[0]
    }
}

export const pokemonData  = new PokemonData()