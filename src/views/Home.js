import React, { useState, useEffect } from "react";
import { getPokemons, getPokemonsData, searchPokemon,favoritePokemon } from "../api";
import SearchBar from "../components/SearchBar/SearchBar";
import Pokedex from "../components/Pokedex/Pokedex";

function Home(props) {
  console.log("props", props);
  const { localStorageKeyHeart,localStorageKey } = props;
  const [pokemons, setPokemon] = useState([]);

  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState([]);
  const [updatedFav, setUpdateFav] = useState([]);
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
        poke.heart=1;
        return false;
      })
      console.log("results", results);
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

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemon();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    const result2 = await favoritePokemon(pokemon);
    console.log('a',result2)
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemon([result]);
      setPage(0);
      setTotal(1);
      const updated = [...favorite];
      const update=[...updatedFav];
      update.push(result2)
      updated.push(pokemon);
      setFavorite(updated);
      window.localStorage.setItem(localStorageKey, JSON.stringify(update));
      window.localStorage.setItem(localStorageKeyHeart, JSON.stringify(updated));
    }
    setLoading(false);
    setSearching(false);
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
          total={total}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default Home;
