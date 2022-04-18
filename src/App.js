import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import ExplanationApp from "./views/ExplanationApp";
import Navbar from "./components/Navbar/Navbar";
import { FavoriteProvider } from "./context/favoritePokemon";
import {useLocalStorageData} from './customHooks/useLocalStorage';

function App() {
  const [updatedFav, setUpdateFav] = useLocalStorageData('favorite_pokemons', []);

  const updateFavoritePokemons = (pokemon) => {
    setUpdateFav(pokemon)
  };

  const updateHeartPokemon = (pokemon) => {
    setUpdateFav(pokemon)
  };

  return (
    <Router>
      <FavoriteProvider
        value={{
          favPokemon: updatedFav,
          updateFavoritePokemons: updateFavoritePokemons,
          updateHearts: updateHeartPokemon,
        }}
      >
        <div>
          <Navbar/>
          <div className="container">
            <Routes>
              <Route path="/" element={<ExplanationApp />} />
              <Route path="/buscador" element={<Home  updateFavoritePokemons={updateFavoritePokemons}/>} />
              <Route path="/favoritos" element={<Favorites />} />
            </Routes>
          </div>
        </div>
      </FavoriteProvider>
    </Router>
  );
}

export default App;
