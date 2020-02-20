import React from 'react';
import './SearchBar.scss';


export default function SearchBar() {

  function search(e) {
    console.log("e.key", e.key);
      if (e.key === "Enter") {
      alert(e.target.value);
    }
  }

  return (
    <div className="search-bar-container">
      <input type="text" placeholder="Search..." onKeyUp={search}/>
      <div className="search"></div>
    </div>
  );
}