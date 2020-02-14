import React from 'react';
import 'antd/dist/antd.css';
import './SearchBar.scss';
import { Input } from 'antd';

const { Search } = Input;

export default function SearchBar() {

  return (
    <div class="container">
  <input type="text" placeholder="Search..."/>
  <div class="search"></div>
  </div>
  );
}


 {/* <Search placeholder="input search text"
        onSearch={value => console.log(value)}
        enterButton /> */}