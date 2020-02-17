import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Rate } from "antd";
import { Button } from "antd";

const divStyle = {
  padding: "0.5em"
};
const Description = props => {
  return (
    <div style={divStyle}>
      <Container>
        <Row>
          <Col>
  <h1>{props.name}</h1>
          </Col>
        </Row>
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
        <br/>
        <Row>
          <Col md="auto">
            <Button type="primary" icon="star" onClick={event => {}}>
              Add Review
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Description;
