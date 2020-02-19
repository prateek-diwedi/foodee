import React from "react";
// import Photo from "./singlePhoto"
import { Carousel } from "antd";
import './photoCarousel.scss'



const PhotoCarousel = props => {
  let photosMap = props.photoList.map(photo => {
    return <img key={photo.photo.url} className="d-block w-100" src={photo.photo.url} alt="" />;
  });

  return (
    // <div style={divStyle}>
      <Carousel autoplay>{photosMap}</Carousel>
    // </div>
  );
};

export default PhotoCarousel;
