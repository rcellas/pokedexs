import { useState } from "react";
import { favoritePokemon } from "../api";

export function useLocalStorageData(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const [updatedFav, setUpdateFav] = useState([]);

  const setValue = async (value) => {
    const result = await favoritePokemon(value);
    const update = [...updatedFav];
    update.push(result);
    update.map((poke)=>{
      poke.heart=0;
      return false;
    })
    const newValue = update.map((poke) => poke.heart);
    console.log('newValue',updatedFav)
    
    const isFavorite = updatedFav.includes(newValue);
    console.log('isFavorite',isFavorite)
    
    setStoredValue(update);
    setUpdateFav(update);
    window.localStorage.setItem(key, JSON.stringify(update));
  };

  return [storedValue, setValue];
}

export function useLocalStorageDataHeart(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const [favorite, setFavorite] = useState([]);

  const setValue = async (value) => {
    console.log('a',value)
    const result = await favoritePokemon(value);
    const updated = [...favorite];
    const isFavorite = favorite.indexOf(value);
    console.log("v", isFavorite);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(result.name);
    }
    setStoredValue(updated);
    setFavorite(updated);
    window.localStorage.setItem(key, JSON.stringify(updated));
  };

  return [storedValue, setValue];
}
