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
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../slices/counterSlice.js";
import { RootState } from "../store.js";




export default function Home({ pokemon }) {

  // console.log(pokemon);
  return (
    <Layout title="nextJsPokeDex">
      <div className=" p-10 bg-red-300">
        <h1 className="text-4xl text-center">The value of count is 0</h1>
        <div>
          <div>
            {/* <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <span>{count}</span>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button> */}
          </div>
        </div>
      </div>

      <div className="text-center text-black text-4xl font-serif my-2">
        {" "}
        <h1>NextJs Pokemon</h1>
      </div>
      <PokemonList pokemon={pokemon} />
    </Layout>
  );
}

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
