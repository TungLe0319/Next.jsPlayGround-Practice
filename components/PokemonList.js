import React from "react";
import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
   const res = await fetch("https://pokeapi.co/api/v2/pokemon");
   const data = await res.json();
   console.log(data);
   return {
    props: {
     pokemons : data
    }
   }
}

const PokemonList = ({pokemons}) => {
  return (

     <div className="">
      <ul>
      {pokemons.map(pokemon =>(
<li  key={pokemon} >  {pokemon.name}   </li>
      ))}
      </ul>
     </div>

  );
};

export default PokemonList;
