import React from "react";
// import Photo from "./singlePhoto"
import { Carousel } from "antd";
import "./photoCarousel.scss";

const divStyle = {

};
const PhotoCarousel = props => {
  let photosMap = props.photoList.map(photo => {
    return <img className="d-block w-100" src={photo.photo.url} alt="" />;
  });

  return (
    <div style={divStyle}>
      <Carousel autoplay>{photosMap}</Carousel>
    </div>
  );
};

export default PhotoCarousel;
