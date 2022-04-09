import React, { useState, useEffect } from "react";
import "./App.css";
import { getPokemons, getPokemonsData } from "./api";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import Pokedex from "./components/Pokedex/Pokedex";
import {FavoriteProvider} from "./context/favoritePokemon";

function App() {
  const [pokemons, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);
  const [favorite,setFavorite] = useState([]);

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

  const updateFavoritePokemons = (name) => {
    const updated =[...favorite];
    const isFavorite = favorite.indexOf(name);
    if(isFavorite >=0){
      updated.splice(isFavorite,1);
    } else{
      updated.push(name);
    }
    setFavorite(updated);
  }

  return (
    <FavoriteProvider value={{favPokemon:favorite, updateFavoritePokemons:updateFavoritePokemons }}>
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
    </FavoriteProvider>
  );
}

export default App;
