import { useState } from "react";
import { favoritePokemon } from "../api";

export function useLocalStorageData(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  const [updatedFav, setUpdateFav] = useState([]);

  // pasa la informacion de los pokemons favoritos a traves de favoritePokemon con funcion async await
  const updateFav = async (pokemon) => {
    const newFav = await favoritePokemon(pokemon);
    const update = [...updatedFav];
    newFav.heart = true;
    // mirar si esta en la lista de favoritos y que elimine el pokemon correspondiente
    const index = update.findIndex((fav) => fav.id === newFav.id);
    if (index === -1) {
      //si no existe lo agrega
      newFav.heart = true;
      update.push(newFav);
      setUpdateFav(update);
      setStoredValue(update);
      window.localStorage.setItem(key, JSON.stringify(update));
    } else {
      //si existe lo pasas a false
      newFav.heart = false;
      update.splice(update.indexOf(newFav), 1);
      setUpdateFav(update);
      setStoredValue(update);
      window.localStorage.setItem(key, JSON.stringify(update));
    }
  };
  return [storedValue, updateFav];
}
