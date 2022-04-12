import React, { useContext,useEffect} from "react";
import PokemonFile from "../components/PokemonFile/PokemonFile";
import FavoriteContext from "../context/favoritePokemon";

function Favorites(props) {

  const { favPokemon, favHeartPokemon } = useContext(FavoriteContext);

  console.log('favContext',favPokemon);
  return (
    <div>
      <div className="pokedex-grid">
        {favPokemon.map((pokemon, idx) => {
          console.log('pokemon',idx);
          return <PokemonFile pokemon={pokemon} key={pokemon.id} />;
        })}
      </div>
    </div>
  );
}

export default Favorites;
