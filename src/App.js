import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import ExplanationApp from "./views/ExplanationApp";
import Navbar from "./components/Navbar/Navbar";
import { FavoriteProvider } from "./context/favoritePokemon";
import {useLocalStorageData, useLocalStorageDataHeart} from './customHooks/useLocalStorage';

function App() {
  const [favorite, setFavorite] = useLocalStorageDataHeart('favorite_heart_pokemons', []);
  const [updatedFav, setUpdateFav] = useLocalStorageData('favorite_pokemons', []);

  const updateFavoritePokemons = (pokemon) => {
    console.log('pokemon',pokemon);
    setUpdateFav(pokemon)
  };

  return (
    <Router>
      <FavoriteProvider
        value={{
          favPokemon: updatedFav,
          favHeartPokemon:favorite,
          updateFavoritePokemons: updateFavoritePokemons,
        }}
      >
        <div>
          <Navbar updatedFav={updatedFav} />

          <div className="container mx-auto p-6">
            <Routes>
              <Route path="/" element={<ExplanationApp />} />
              <Route path="/inicio" element={<Home />} />
              <Route path="/favoritos" element={<Favorites />} />
            </Routes>
          </div>
        </div>
      </FavoriteProvider>
    </Router>
  );
}

export default App;
