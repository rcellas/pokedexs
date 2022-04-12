import React from "react";

const FavoriteContext = React.createContext({
    favPokemon:[],
    favHeartPokemon:[],
    updateFavoritePokemons:(id)=>null
})

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;