import React, { useContext } from "react";
import FavoriteContext from "../../context/favoritePokemon";
import "./PokemonFile.scss";

const Pokemon = (props) => {
  const { pokemon, handleRemoveItem } = props;

  const { favPokemon, updateFavoritePokemons } = useContext(FavoriteContext);

  const redHeart = "❤️️";
  const blackHeart = "❤";

  const heart = favPokemon.find((fav) => fav.id === pokemon.id)
    ? redHeart
    : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  return (
    <div className="pokemonCard col-md-4 col-12">
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
          <button className="cardFavorite btn btn-light" onClick={clickHeart}>
            {heart}
          </button>
          {window.location.pathname !== "/favoritos" ? (
            <button
              name={pokemon.name}
              onClick={handleRemoveItem}
              className="btn btn-danger"
            >
              Delete
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
