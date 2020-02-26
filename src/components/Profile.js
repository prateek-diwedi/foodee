import React from "react";
import SearchDescription from "./SearchDescription";


export default function Profile() {

  return(
    <div>
    <h3>Logged in as name</h3>
    <h3>email : </h3>
    <h2> Your favourite restuarents are: </h2>
    <SearchDescription></SearchDescription>
    
    </div>
  )
}