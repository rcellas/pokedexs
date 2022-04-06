import React from "react";
import PokemonFile from '../PokemonFile/PokemonFile';
import "./Pokedex.scss";

const Pokedex = (props) => {
  console.log(props);
  const { pokemons } = props;
  return (
    <div className="pokedex">
      <header>
        <h1>Pokedex</h1>
        <div>Paginación</div>
      </header>
      <div className="pokedex-grid">
        {pokemons.map((pokemon,idx)=>{
            return(
                <PokemonFile pokemon={pokemon} key={pokemon.name}/>
            )
        })}
      </div>
    </div>
  );
};

export default Pokedex;
