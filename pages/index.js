import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Script from "next/script.js";
import HeroSection from "../components/HeroSection.js";
import { pokemonService } from "./services/PokemonService.js";
import Link from "next/link.js";
import Layout from "../components/Layout.js";
import PokemonList from "../components/PokemonList.js";

export default function Home({ pokemon }) {
  // console.log(pokemon);
  return (
    <Layout title="nextJsPokeDex">
      {/* <div className="flex  w-full h-screen ">
      <div className="text-black ml-5 font-semibold ">
        <h1>Pokemon List</h1>
      </div>
      <div className="  overflow-y-auto    h-5/6  ml-5 mt-5 bg-orange-400 w-52  rounded-md shadow-2xl ">
        <ul className=" p-3">
          {pokemon.map((x, index) => (
            <li
              className="
              w-full hover:shadow-xl focus:translate-x-8 focus:transition-all focus:duration-150  focus:drop-shadow-2xl  focus:outline-none focus:ring focus:ring-violet-300 focus:bg-violet-300 active:bg-violet-700
              hover:bg-slate-300 hover:ring-violet-400 hover:ring-3 ring-4 my-3 ring-orange-400  p-2 rounded-md content-center flex"
              key={index}
            >
              <a href={`/pokemon?id=${index + 1}`} className="w-full">
                {" "}
                <img src={x.image} alt="" className=" h-12 w-12" />
                <p className="ml-3"> {x.name} </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div> */}
<div className="text-center text-black text-4xl font-serif my-2"> <h1>NextJs Pokemon</h1></div>
      <PokemonList pokemon={pokemon} />
    </Layout>
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
// export async function getServerSideProps({ query }) {
//   const id = query.id;
//   try {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//     const pokeman = await res.json();
//     const paddingIndex = (`00` + id).slice(-3);
//     const image = ` https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddingIndex}.png`;
//     pokeman.image = image;
//     return { props: { pokeman } };
//   } catch (error) {
//     console.log(error);
//   }
// }
