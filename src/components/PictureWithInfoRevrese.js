import React from "react";
import "./PictureWithInfoReverse.scss";
import "../images/image1.jpg";
export default function PictureWithInfo() {

  return (
    <div class="container" >
      <article>
        <h2>You’ve got stuff to do. We’ve got options.</h2>
        <p>
          Just search for a cuisine, meal or a specific thing and we will show you all the options available around or for any place that you have selected. You can Check the rate and reviews and even share it with your friends.
	    	</p>
      </article>

      <img src={require('../images/image6.jpg')} width="450px" />
    </div>
  )
}