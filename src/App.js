import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { getPokemons, getPokemonsData, searchPokemon,favoritePokemon } from "./api";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import Pokedex from "./components/Pokedex/Pokedex";
import { FavoriteProvider } from "./context/favoritePokemon";

function App() {
  const [pokemons, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState([]);
  const [updatedFav, setUpdateFav] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const localStorageKey = "favorite_pokemons";

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemon(results);
      setTotal(Math.ceil(data.count / 25));
      setLoading(false);
      setNotFound(false);
    } catch (err) {
      console.error(err);
    }
  };

  // Mantein the favorites pokemons in localStorage
  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorite(pokemons);
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  useEffect(() => {
    if (!searching) {
      fetchPokemon();
    }
  }, [page]);

  const updateFavoritePokemons = async (pokemon) => {
    const result = await favoritePokemon(pokemon);
    const updated = [...favorite];
    const update = [...updatedFav]
    const isFavorite = favorite.indexOf(result.name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      update.push(result)
      updated.push(result.name);
    }
    setUpdateFav(update);
    setFavorite(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemon();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemon([result]);
      setPage(0);
      setTotal(1);
      const updated = [...favorite];
      updated.push(pokemon);
      setFavorite(updated);
      window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
    }
    setLoading(false);
    setSearching(false);
  };

  return (
    <FavoriteProvider
      value={{
        favPokemon: favorite,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div>
        <Navbar updatedFav={updatedFav}/>
        <div className="container mx-auto p-6">
          <SearchBar
            onSearch={onSearch}
            // updateFavoritePokemons={updateFavoritePokemons}
          />
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
      </div>
    </FavoriteProvider>
  );
}

export default App;
