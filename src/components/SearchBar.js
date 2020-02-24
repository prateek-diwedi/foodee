import React, { useState } from 'react';
import './SearchBar.scss';
import { OmitProps } from 'antd/lib/transfer/renderListBody';


export default function SearchBar(props) {

  const [initialSearch, setSearch] = useState('');

  function search(e) {
    console.log("e.key", e.key);
    if (e.key === "Enter") {
      // alert(e.target.value);
      props.onSubmit(e.target.value);
      let searchedItem = e.target.value;
      console.log("searched item in searchbar -->", searchedItem)
    }
  }
  
  function change(e) {
    console.log('change thing', e.target.value)
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