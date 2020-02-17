import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

const PhotoCards = props => {
  const photoList = props.restaurant.photos;
  let photosMap = photoList.map(photo => {
    return (
      <Card>
        <Card.Img src={photo.photo.url} />
      </Card>
    );
  });
  return <CardColumns>{photosMap}</CardColumns>;
};

export default PhotoCards;
