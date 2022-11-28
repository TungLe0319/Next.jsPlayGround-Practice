import { pokeApi } from "./AxiosService.js"

class PokemonService {
async getPokemon(){
  const res = await pokeApi.get('pokemon?limit=150')
console.log('res.data', res.data);
return res.data

}
}
export const pokemonService = new PokemonService()