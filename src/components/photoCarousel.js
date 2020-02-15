import React from "react";
// import Photo from "./singlePhoto"
import { Carousel } from "antd";
import "./photoCarousel.scss";

const PhotoCarousel = props => {
  let photosMap = props.photoList.map(photo => {
    return <img className="d-block w-100" src={photo.photo.url} alt="" />;
  });

  return <Carousel autoplay>{photosMap}</Carousel>;
};

export default PhotoCarousel;
