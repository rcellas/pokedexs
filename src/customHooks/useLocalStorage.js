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

  // update the value stored in localStorage
  // const setValue = (value) => {
  //   // when click heart icon in Pokedex component setValue to true or false 
  //   setUpdateFav(value);
  //   try {
  //     const valueToStore =
  //       value instanceof Function ? value(storedValue) : value;
  //     setStoredValue(valueToStore);
  //     window.localStorage.setItem(key, JSON.stringify(valueToStore));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

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


