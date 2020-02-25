import React from "react";
import { Carousel } from "antd";
import './photoCarousel.scss';

const PhotoCarousel = props => {
  let photosMap = props.photoList.map(photo => {
    return <img key={photo.photo.url} className="d-block w-100" src={photo.photo.url} alt="" />;
  });

  return (
    <Carousel autoplay>{photosMap}</Carousel>
  );
};

export default PhotoCarousel;
