import { app } from "./app";
import { pokemonController } from "./controller/pokemonController";


app.get("/pokemon/id", pokemonController.searchPokemonById)
app.get("/pokemon/name", pokemonController.searchPokemonByName)
app.get("/pokemon/type", pokemonController.searchPokemonByType)
app.get("/pokemon/generation", pokemonController.searchPokemonByGeneration)
