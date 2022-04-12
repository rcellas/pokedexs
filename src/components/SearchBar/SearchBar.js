import React, { useState } from "react";
import { searchPokemon } from "../../api";
import "./SearchBar";

const SearchBar = (props) => {
  const {onSearch} = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const handleClick = async (e) => {
    setSearch(e.target.value);
    onSearch(search);
  };

  return (
    <div className="d-flex mt-4">
        <input class="form-control " type="search" placeholder="Buscar Pokemon"
        onChange={onChange} aria-label="Search" />
        <button class="btn btn-outline-success" onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchBar;
