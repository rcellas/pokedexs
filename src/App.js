import React, { useState, useEffect } from "react";
import "./App.css";
import { getPokemons, getPokemonsData } from "./api";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import Pokedex from "./components/Pokedex/Pokedex";

function App() {
  const [pokemons, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPokemon = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemon(results);
      setTotal(Math.ceil(data.count / 25))
      setLoading(false)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [page]);
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <SearchBar />
        {loading ? (
          <div>Esperando respuesta ...</div>
        ) : (
          <Pokedex loading={loading} pokemons={pokemons} total={total} page={page} setPage={setPage} />
        )}
      </div>
    </div>
  );
}

export default App;
