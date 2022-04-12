import React, { useState, useEffect } from "react";
import { getPokemons, getPokemonsData, searchPokemon } from "../api";
import SearchBar from "../components/SearchBar/SearchBar";
import Pokedex from "../components/Pokedex/Pokedex";

function Home(props) {
  const { updateFavoritePokemons } = props;
  const [pokemons, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      });
      const results = await Promise.all(promises);
      results.map((poke)=>{
        poke.heart=false;
      })
      setPokemon(results);
      setTotal(Math.ceil(data.count / 25));
      setLoading(false);
      setNotFound(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!searching) {
      fetchPokemon();
    }
  }, [page]);

  // search pokemon by name
  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemon();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon.toLowerCase());
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemon([result]);
      updateFavoritePokemons(pokemon)
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  // function remove pokemon in list
  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute("name")
     setPokemon(pokemons.filter(pokemon => pokemon.name !== name));
   };
  return (
    <div className="container mx-auto p-6">
      <SearchBar onSearch={onSearch} />
      {notFound ? (
        // añadir componente de not found
        <div>El pokemon que buscas no existe</div>
      ) : (
        <Pokedex
          loading={loading}
          pokemons={pokemons}
          handleRemoveItem={handleRemoveItem}
          total={total}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default Home;
