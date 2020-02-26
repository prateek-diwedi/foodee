import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Rate } from "antd";
import MapDirection from "./directionMap";
import MapModal from "./mapmodal";
import { Icon } from "antd";

const divStyle = {
  paddingLeft: "55px",
  paddingTop: "10px"
};
const Description = props => {
  return (
    <div style={divStyle}>
      <Row>
        <Col>
          <h1>{props.name}</h1>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={1}>
          <b>Cuisine:</b>
        </Col>
        <Col md="auto">{props.cuisine}</Col>
      </Row>
      <Row>
        <Col sm={1}>
          <b>Hours: </b>
        </Col>
        <Col md="auto">{props.hours}</Col>
      </Row>
      <Row>
        <Col sm={1}>
          <b>Address: </b>
        </Col>
        <Col md="auto">{props.location.address}</Col>
      </Row>
      <Row>
        <Col md="auto">
          <Rate
            disabled
            allowHalf
            defaultValue={Number(props.user_rating.aggregate_rating)}
          />
        </Col>
        <Col md="auto">{Number(props.user_rating.aggregate_rating)}</Col>
        <Col md="auto">{props.user_rating.rating_text}</Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md="auto">
          <Icon
            type="like"
            style={{ fontSize: "40px", color: "#08c" }}
            onClick={event => { }}
          />
        </Col>

        <Col md="auto">
          <MapModal>
            <MapDirection
              start_lng={-123.1278}
              start_lat={49.2778}
              end_lng={props.location.longitude}
              end_lat={props.location.latitude}
            />
          </MapModal>
        </Col>
      </Row>
    </div>
  );
};

export default Description;
