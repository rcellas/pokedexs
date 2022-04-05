import React from "react";
import {searchPokemon} from '../../api';

const {useState} = React;

const SearchBar = () => {
    const [search,setSearch]=useState('');
    const [pokemon,setPokemon]=useState('');

    const onChange=(e)=>{
        setSearch(e.target.value)
    }

    const handleClick = async(e)=>{
        const data = await searchPokemon(search)
        setPokemon(data)
    }

  return (
    <div className="pt-2 relative mx-auto text-gray-600">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Buscar Pokemon"
        onChange={onChange}
      />
      <button onClick={handleClick} className="right-0 top-0 mt-5 ml-3">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="search"
          className="w-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
          ></path>
        </svg>
      </button>

      <div>
          <p>{pokemon.name}</p>
          <p>Peso:{pokemon.weight}</p>
          <img src={pokemon.sprites.front_default}/>
      </div>
    </div>
  );
};

export default SearchBar;
