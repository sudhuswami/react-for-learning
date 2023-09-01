"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    // Fetch data from the PokeAPI
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => {
        setPokemonData(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon data:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {pokemonData.map((pokemon, index) => (
        <div
          key={index}
          className="p-4 border border-gray-200 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-2 capitalize">
            {pokemon.name}
          </h2>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`}
            alt={pokemon.name}
            className="mx-auto"
          />
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
