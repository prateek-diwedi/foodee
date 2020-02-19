import React, { Component } from 'react';
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import PictureWithInfo from "../components/PictureWithInfo";
import PictureWithInfoReverse from "../components/PictureWithInfoRevrese"
import Footer from "../components/Footer"
import WelcomePage from "../components/WelcomePage"
import AutoText from "../components/AutoText"
import Categories from "../components/Categories"
import Location from "../components/Location"


export default function FirstPage() {

  return (
    <div>
     <WelcomePage>
        <AutoText></AutoText>
        <Location></Location>
        <SearchBar></SearchBar>
     </WelcomePage>

     <Categories></Categories>
      
     <PictureWithInfo></PictureWithInfo>
      
     <PictureWithInfoReverse></PictureWithInfoReverse>
      
     <Footer></Footer>
    </div>
  )
}