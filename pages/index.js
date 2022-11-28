
import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Script from "next/script.js";
import HeroSection from "../components/HeroSection.js";

export default function Home() {

const callAPI = async () => {
  try{
    console.log('hi');
        const res = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await res.json()
        console.log(data);
  } catch (err){
    console.log(err);
  }
}

  return (
    <div className="flex flex-col w-full h-screen">
 <button onClick={callAPI} className="p-3 bg-violet-700"> Make Api Call</button>
    </div>
  );
}
