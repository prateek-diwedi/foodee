import React from 'react';
import './SearchBar.scss';


export default function SearchBar() {

  return (
    <div className="search-bar-container">
      <input type="text" placeholder="Search..."/>
      <div class="search"></div>
    </div>
  );
}