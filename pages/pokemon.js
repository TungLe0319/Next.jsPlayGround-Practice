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
      <div className=" my-5 flex justify-between  rounded-md">
        <div className="">
          <p className="text-2xl"> Height: {pokeMan.height}</p>
          <p className="text-2xl"> Weight: {pokeMan.weight} Ib</p>
          <p className="text-2xl"> Base XP: {pokeMan.base_experience} </p>
          <div className="flex justify-around my-2 ">
            {pokeMan.types.map((type, index) => (
              <p
                key={index}
                className="
              
              hover:bg-blue-300 hover:ring-4 hover:ring-blue-100 text-3xl p-4 ring-1 ring-neutral-800 rounded-xl m-2 "
              >
                {type.type.name}
              </p>
            ))}
          </div>
        </div>
        <div>
          <img src={pokeMan.image} alt="" className=" " />
        </div>
        <div className="">
          <div>
            <ul className=" ">
              {pokeMan.stats.map((stat, index) => (
                <li
                  key={index}
                  className="  list-item text-xl my-2 bg-gray-100 p-2 rounded-md  "
                >
                  <p>{stat.stat.name}</p> <p>{stat.base_stat}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <button></button>
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
