import React from "react";
import "./PictureWithInfoReverse.scss";
import "../images/image1.jpg";
export default function PictureWithInfo() {

  return (
    <div class="container" >
      <article>
        <h2>Every Flavor Welcome</h2>
        <p>
          From your neighborhood sushi spot to the burger and fries you crave, choose from over 300,000 local and national favorites across the U.S. and Canada.
	    	</p>
      </article>

      <img src={require('../images/image6.jpg')} width="450px" />
    </div>
  )
}