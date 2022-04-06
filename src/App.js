import React, {useState, useEffect} from 'react';
import "./App.css";
import { getPokemons, getPokemonsData } from './api';
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import Pokedex from "./components/Pokedex/Pokedex";

function App() {
  const [pokemons,setPokemon]=useState([])

  const fetchPokemon = async ()=>{
    try{
      const data= await getPokemons();
      const promises = data.results.map(async(pokemon)=>{
        return await getPokemonsData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemon(results)
    }catch(err){
      console.error(err)
    }
  }

  useEffect(()=>{
    fetchPokemon()
  }, [])
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
      <SearchBar/>
      <Pokedex pokemons={pokemons}/>
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
