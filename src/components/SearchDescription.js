import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'
import { Rate } from "antd";
import "./SearchDescription.scss";

const divStyle = {
  padding: "0.5em"
};
const SearchDescription = props => {
  return (
    <div className="search-container-style">
    <div className="search-container" style={divStyle}>
      <div class="clearfix float-my-children">
        <Image src={props.thumb} fluid />
      </div> 

      <div className="clearfix search-name">
        <h1>{props.name}</h1>
      </div>

      <div className="clearfix search-desc">
        <Row>
          <Col>
            <p>
              <b>Cuisine: </b>
              {props.cuisine}
            </p>
            <p>
              <b>Hours: </b>
              {props.hours}
            </p>
            <p>
              <b>Address: </b>
              {props.location.address}
            </p>
            </Col>
          </Row>
      </div>
      
      <div className="clearfix search-rating">
        <Row>
          <Col md="auto">
            <Rate 
              disabled
              allowHalf
              defaultValue={Number(props.user_rating.aggregate_rating)}
            />
          </Col>
          <Col md="auto">
            <b>
              {Number(props.user_rating.aggregate_rating)}
            </b>
          </Col>
          <Col md="auto">
            <b>
              {props.user_rating.rating_text}
            </b>
          </Col>
        </Row>
      </div>
    </div>
    </div>
  );
};

export default SearchDescription;
