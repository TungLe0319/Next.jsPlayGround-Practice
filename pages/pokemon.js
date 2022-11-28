import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Script from "next/script.js";
import HeroSection from "../components/HeroSection.js";

export default function Pokemon({ pokemon }) {
  console.log(pokemon);
  return (
    <div className="flex flex-col w-full h-screen">
      <button className="p-3 bg-violet-700">Make Api Call</button>
      <ul></ul>
    </div>
  );
}
export async function getStaticProps(context) {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
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
        props: {},
      };
  } catch (err) {
    console.log(err);
  }

}
