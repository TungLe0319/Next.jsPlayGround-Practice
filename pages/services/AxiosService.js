import  Axios  from "axios";
// import { baseURL } from "../../utils/env.js";

export const pokeApi = Axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 8000,
});