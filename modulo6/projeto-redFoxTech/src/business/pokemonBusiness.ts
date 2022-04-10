import { pokemonData } from "../data/pokemonData";
import { Generation, Id, Name, Type } from "../model/pokemon"


class PokemonBusiness {
    searchPokemonById = async (id: Id): Promise<[]> => {
        
        if(!id){
            throw new Error("passe corretamente o 'id' no body");
        }
        
        const pokemon = await pokemonData.searchPokemonById(id)

        if(pokemon.length === 0){
            throw new Error("não existe um pokemon que corresponda ao 'id' passado");
        }
        return pokemon
    }

    searchPokemonByName = async (name: Name): Promise<[]> => {

        if(!name){
            throw new Error("passe corretamente o 'name' no body");
        }
        
        const pokemon = await pokemonData.searchPokemonByName(name)

        if(pokemon.length === 0){
            throw new Error("não existe um pokemon que corresponda ao 'name' passado");
        }
        return pokemon
    }

    searchPokemonByType = async (type: Type): Promise<[]> => {
        
        if(!type){
            throw new Error("passe corretamente o 'type' no body");
        }
        
        const pokemon = await pokemonData.searchPokemonByType(type)

        if(pokemon.length === 0){
            throw new Error("não existe um pokemon que corresponda ao 'type' passado");
        }
        return pokemon
    }

    searchPokemonByGeneration = async (generation: Generation): Promise<[]> => {

        if(!generation){
            throw new Error("passe corretamente o 'generation' no body");
        }
        
        const pokemon = await pokemonData.searchPokemonByGeneration(generation)

        if(pokemon.length === 0){
            throw new Error("não existe um pokemon que corresponda a 'generation' passado");
        }
        return pokemon
    }
}

export const pokemonBusiness  = new PokemonBusiness()