import React, { useState } from 'react';
import './SearchBar.scss';


export default function SearchBar(props) {

  const [initialSearch, setSearch] = useState('');

  function search(e) {
    console.log("e.key", e.key);
    if (e.key === "Enter") {
      props.onSubmit(e.target.value);
      let searchedItem = e.target.value;
    }
  }

  function change(e) {
    props.setSearch(e.target.value);
  }

  return (
    <div className="search-bar-container">
      <input type="text" placeholder="Search..."
        onKeyUp={search}
        onChange={change}
      />
      <div className="search"></div>
    </div>
  );
}