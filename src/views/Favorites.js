import React, { useContext } from "react";
import PokemonFile from "../components/PokemonFile/PokemonFile";
import FavoriteContext from "../context/favoritePokemon";

function Favorites() {
  const { favPokemon } = useContext(FavoriteContext);
  return (
    <div className="container">
      <div className="row">
          {favPokemon.map((pokemon, idx) => {
            return <PokemonFile pokemon={pokemon} key={pokemon.id} />;
          })}
      </div>
    </div>
  );
}

export default Favorites;
