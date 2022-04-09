import React from "react";
import "./PokemonFile.scss";

const Pokemon = (props) => {
  const { pokemon } = props;

  const redHeart = "❤️️";
  const blackHeart = "❤";
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
          <button className="cardFavorite">
            {redHeart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
