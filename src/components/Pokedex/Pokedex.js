import React from "react";
import Pagination from "../Pagination/Pagination";
import PokemonFile from "../PokemonFile/PokemonFile";
import "./Pokedex.scss";

const Pokedex = (props) => {
  const { pokemons, page, setPage, total, loading,handleRemoveItem } = props;

  const lastPages = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };
  const nextPages = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };

  return (
    <div className="pokedex">
      <header>
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPages}
          onRightClick={nextPages}
        />
      </header>
      {loading ? (
        <div>Cargando Pokemons...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, idx) => {
            return <PokemonFile pokemon={pokemon} key={pokemon.name} handleRemoveItem={handleRemoveItem}/>;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
