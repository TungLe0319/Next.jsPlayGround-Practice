import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Script from "next/script.js";
import HeroSection from "../components/HeroSection.js";
import { pokemonService } from "./services/PokemonService.js";

export default function Home({ pokemon }) {
  // console.log(pokemon);
  return (
    <div className="flex  w-full h-screen bg-white">
      <div className="  overflow-y-auto    h-5/6  ml-5 mt-5 bg-orange-400 w-52  rounded-md shadow-2xl ">
        <ul className=" p-3">
          {pokemon.map((x, index) => (
            <button
              className="
              w-full
              hover:shadow-xl
              
              active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 focus:bg-violet-300
              hover:bg-slate-300 hover:ring-violet-400 hover:ring-3 ring-4 my-3 ring-orange-400  p-2 rounded-md content-center flex"
              key={index}
            >
              <img src={x.image} alt="" className=" h-12 w-12" />
              <p className="ml-3"> {x.name} </p>
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
}

//  export async function getPokemon(){
//   try {
//       await pokemonService.getPokemon()
//     } catch (error) {
//      console.log(error);
//     }
// }
export async function getStaticProps(context) {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
    const { results } = await res.json();
    const pokemon = results.map((result, index) => {
      const paddingIndex = ("00" + (index + 1)).slice(-3);
      const image = ` https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddingIndex}.png`;
      return {
        ...result,
        image,
      };
    });
    return {
      props: { pokemon },
    };
  } catch (err) {
    console.log(err);
  }
}
