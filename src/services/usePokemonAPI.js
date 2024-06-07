import { useEffect } from "react";
import useRequest from "./useRequest";
const API = "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0";
const usePokemonAPI = function () {
  const [data, error] = useRequest(API);

  let pokemons = [];
  if (data) {
    pokemons = JSON.parse(data);
    pokemons = pokemons.results;
  } else if (error) {
    console.error(error);
  }
  return pokemons;
};

const usePokemonItem = function (url) {
  const [data, error] = useRequest(url);
  if (data) {
    return JSON.parse(data);
  } else if (error) {
    console.error(error);
  }
  return {};
};

export { usePokemonAPI, usePokemonItem };
