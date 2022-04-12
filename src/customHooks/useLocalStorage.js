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

  const setValue = async (value) => {
    const result = await favoritePokemon(value);
    const update = [...updatedFav];
    update.push(result);
    update.map((poke)=>{
      poke.heart=0;
      return false;
    })
        
    setStoredValue(update);
    setUpdateFav(update);
    window.localStorage.setItem(key, JSON.stringify(update));
  };
  return [storedValue, setValue];
}


