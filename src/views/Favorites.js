import React, { useContext } from "react";
import PokemonFile from "../components/PokemonFile/PokemonFile";
import FavoriteContext from "../context/favoritePokemon";

function Favorites() {
  const { favPokemon} = useContext(FavoriteContext);
  return (
    <div>
      <div className="pokedex-grid mt-4">
        {favPokemon.map((pokemon, idx) => {
          return <PokemonFile pokemon={pokemon} key={pokemon.id} />;
        })}
      </div>
    </div>
  );
}

export default Favorites;
