import React from "react";
import "../components/Foodee.scss"
import "../images/foodee.gif";
export default function FoodeeLogo() {

  return (
    <div class="FoodeeLogocontainer" >
      <a href="/">
      <img src={require('../images/foodee.gif')} />
      </a>
    </div>
  )
}