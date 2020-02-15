import React from "react"


const Photo = props => {
  return (
    <div>
      <img width="fit-content" height="fit-content" alt="" src={props.url} />
    </div>
  );
};

export default Photo;