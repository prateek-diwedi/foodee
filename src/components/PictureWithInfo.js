import React from "react";
import "./PictureWithInfo.scss";
import "../images/image1.jpg";
export default function PictureWithInfo() {

  return (
    <div className="container-picture-with-info" >
      <img src={require('../images/image1.jpg')} />
      <article>
        <h2>Every Flavor Welcome</h2>
        <p>
          From your neighborhood sushi spot to the burger and fries you crave, choose from over 300,000 local and national favorites across the U.S., Canada, Australia and or from any of the 24 countries that we have data about. So just think of a place and we will show you results for it.
		    </p>
      </article>
    </div>
  )
}