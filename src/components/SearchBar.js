import React from 'react';
import './SearchBar.scss';


export default function SearchBar() {

  return (
    <div class="container">
  <input type="text" placeholder="Search..."/>
  <div class="search"></div>
  </div>
  );
}