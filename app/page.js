import React from "react";
import PokemonList from "./components/PokemonList";

function page() {
  return (
    <div className="App">
      <h1 className="text-3xl font-semibold text-center my-6">
        Beautiful Pokémon Cards
      </h1>
      <PokemonList />
    </div>
  );
}

export default page;
