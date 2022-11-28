import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Script from "next/script.js";
import HeroSection from "../components/HeroSection.js";

import Link from "next/link.js";
import Layout from "../components/Layout.js";

// NOTE  {pokemon} is the props i am passing through when grabbing data from the api
//NOTE comes in as array
export default function PokemonList({ pokemon }) {
  // console.log(pokemon);
  return (
    <div className="   ">
      <div className="  overflow-y-auto ring-3 ring-red-700  border-red-400  h-5/6   bg-orange-400  rounded-md shadow-2xl ">
        <ul className=" p-3">
          {pokemon.map((x, index) => (
            <li
              className="
              w-60 mx-auto
               hover:scale-125 hover:duration-150
             hover:shadow-xl focus:translate-x-8 focus:transition-all focus:duration-150  focus:drop-shadow-2xl  focus:outline-none focus:ring focus:ring-violet-300 focus:bg-violet-300 active:bg-violet-700
              hover:bg-slate-300 hover:ring-violet-400 hover:ring-3 ring-4 my-3 ring-orange-400  p-2 rounded-md flex justify-center"
              key={index}
            >
              <a href={`/pokemon?id=${index + 1}`} className=" ">
                {" "}
                <div className="flex ">
                  <img src={x.image} alt="" className=" w-20 h-20" />
                  <p className="ml-3"> {x.name} </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// export async function getStaticProps(context) {
//   try {
//     const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
//     const { results } = await res.json();
//     const pokemon = results.map((result, index) => {
//       const paddingIndex = ("00" + (index + 1)).slice(-3);
//       const image = ` https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddingIndex}.png`;
//       return {
//         ...result,
//         image,
//       };
//     });
//     return {
//       props: { pokemon },
//     };
//   } catch (err) {
//     console.log(err);
//   }
// }
