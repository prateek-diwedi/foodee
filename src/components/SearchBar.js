import React from 'react';
import './SearchBar.scss';
import { OmitProps } from 'antd/lib/transfer/renderListBody';


export default function SearchBar(props) {

  function search(e) {
    console.log("e.key", e.key);
    if (e.key === "Enter") {
      alert(e.target.value);
      props.onSubmit(e.target.value)
    }
  }

  return (
    <div className="search-bar-container">
      <input type="text" placeholder="Search..." onKeyUp={search}/>
      <div className="search"></div>
    </div>
  );
}