import React from "react";

const Search = ({ setSearch }) => {
  function ontype(e) {
    setSearch(e.target.value);
  }
  return (
    <div>
      <input type="search" name="inp" onChange={ontype} placeholder="Search" />
    </div>
  );
};

export default Search;
