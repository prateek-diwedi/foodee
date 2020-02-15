import React from "react";
import Photo from "./singlePhoto"
import { Carousel } from 'antd';
import "./photoCarousel.scss"



const PhotoCarousel = (props) =>{
  let photosMap = props.photoList.map(photo => {
    return (
      <div>
        <Photo url={photo.photo.url} />
      </div>
    );
  });

return(
  <Carousel autoplay>{photosMap}</Carousel>
)
};

export default PhotoCarousel;
