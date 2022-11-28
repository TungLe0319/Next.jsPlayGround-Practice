import React from "react";
import Layout from "../components/Layout.js";

export default function pokemon({ pokeMan }) {
  console.log(pokeMan);
  return <div></div>;
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeMan = await res.json();
    const paddingIndex = (`00` + id).slice(-3);
    const image = ` https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddingIndex}.png`;
    pokeMan.image = image;
    return { props: { pokeMan } };
  } catch (error) {
    console.log(error);
  }
}
