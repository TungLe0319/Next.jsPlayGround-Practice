import React from "react";
import Layout from "../components/Layout.js";

export default function pokemon({ pokeMan }) {
  console.log(pokeMan);
  return (
    <div className="container bg-orange-200 place-content-center   mt-64 py-10  ">
      <div className="text-center">
        {" "}
        <p className=" font-mono font-bold text-7xl"> {pokeMan.name}</p>{" "}
      </div>
      <div className=" my-5 flex justify-center  justify-between  rounded-md">
        <div className="">
          <p className="text-2xl"> Height: {pokeMan.height}</p>
          <p className="text-2xl"> Weight: {pokeMan.weight} Ib</p>
        </div>
        <div>
          <img src={pokeMan.image} alt="" className=" " />
        </div>
        <div className="">{pokeMan.height}</div>
      </div>
    </div>
  );
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
