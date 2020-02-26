import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import './photocard.scss'

const PhotoCards = props => {
  const photoList = props.restaurant.photos;
  let photosMap = photoList.map(photo => {
    return (
      <div className="photoCardStyling">
      <Card>
        <Card.Img src={photo.photo.url} />
      </Card>
      </div>
    );
  });
  return <CardColumns>{photosMap}</CardColumns>;
};

export default PhotoCards;
