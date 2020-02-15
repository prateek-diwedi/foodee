import React from "react"
import Image from 'react-bootstrap/Image'

const Photo = props => {
  return (
    <div>
      <Image src={props.url} fluid />
    </div>
  );
};

export default Photo;

//      <img width="fit-content" height="fit-content" alt="" src={props.url} />
