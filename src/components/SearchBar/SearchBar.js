import React, { useState } from "react";
import { searchPokemon } from "../../api";
import "./SearchBar";

const SearchBar = (props) => {
  const { onSearch} = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    console.log("e", e.target.value);
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const handleClick = async (e) => {
    setSearch(e.target.value);
    onSearch(search);
    // if (e.target.value.length === '' || null) {
      // updateFavoritePokemons(search);
    // }
  };

  return (
    <div class="flex border-grey-light border w-96">
      <input
        class="w-full rounded ml-1"
        type="text"
        placeholder="Buscar Pokemon"
        onChange={onChange}
      />
      <button
        class="bg-grey-lightest border-grey border-l shadow hover:bg-grey-lightest"
        onClick={handleClick}
      >
        <span class="w-auto flex justify-end items-center text-grey p-2 hover:text-grey-darkest">
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
        </span>
      </button>
    </div>
  );
};

export default SearchBar;
