import { pokeApi } from "./AxiosService.js"

class PokemonService {
async getPokemon(){
  const res = await pokeApi.get('pokemon?limit=150')
console.log('res.data', res.data);
return res.data

}

async getPokemonDetails({query}){
   const id = query.id;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      console.log(res);
      const pokeMan = await res.json();
      const paddingIndex = (`00` + id).slice(-3);
      const image = ` https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddingIndex}.png`;
      pokeMan.image = image;
      return { props: { pokeMan } };
}
}
export const pokemonService = new PokemonService()