import React, { useState, useContext } from "react";
import FavoriteContext from "../../context/favoritePokemon";
import "./PokemonFile.scss";
import { removePokemonData } from "../../api";

const Pokemon = (props) => {
  const { pokemon,handleRemoveItem } = props;

  const [deletePokemon, setDeletePokemon] = useState([]);

  const { favPokemon, updateFavoritePokemons } =
    useContext(FavoriteContext);

  console.log('aaa',favPokemon);

  const redHeart = "❤️️";
  const blackHeart = "❤";

  const heart = favPokemon.includes(pokemon.heart) && pokemon.heart === 0 ? redHeart : blackHeart;

  console.log('pokemon',pokemon.heart);
  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  // const removePokemon= async (e) =>{
  //   const name = e.target.getAttribute("name");
  //   const result = await removePokemonData(pokemon.filter(p => p.name === name));
  //   // setItems(currentItems => currentItems.filter((item, index) => index !== i));
  //   // const name = e.target.getAttribute("name")
  //   // setDeletePokemon(pokemon.filter(p => p.name !== name));
  // }

  return (
    <div className="pokemonCard">
      <div className="conteinerImg">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemonImg"
        />
      </div>
      <div className="cardBody">
        <div className="cardTop">
          <h3>{pokemon.name}</h3>
          <p>#{pokemon.id}</p>
        </div>
        <div className="cardFooter">
          <div className="cardType">
            {pokemon.types.map((type, idx) => {
              return (
                <div key={idx} className="cardTypeText">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button className="cardFavorite" onClick={clickHeart}>
            {heart}
          </button>
          <button name={pokemon.name} onClick={handleRemoveItem}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
