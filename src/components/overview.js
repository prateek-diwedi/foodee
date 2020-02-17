import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Rate, Icon } from 'antd';
const Overview = (props)=>{
  return(
    <div>
    <Container>
      <Row>
      <Col sm={2}>
      <b>Highlight : </b>
      </Col>
      <Col md="auto">
        {props.restaurant.highlights}
      </Col>
      </Row>

      <Row>
      <Col sm={2}>
      <b>Price range :</b>
      </Col>
      <Col md="4">
        <Rate character='$' color='#08c' defaultValue={props.restaurant.price_range}/>
      </Col>
      </Row>

      <Row>
      <Col sm={2}>
      <b>Average Cost : </b>
      </Col>
      <Col md="4">
        {props.restaurant.average_cost_for_two} $
      </Col>
      </Row>

      <Row>
     <Col sm={2}>
     <b>Total Reviews : </b>
      </Col>
      <Col md="4">
        {props.restaurant.all_reviews_count}
      </Col>
      </Row>

      <Row>
      <Col sm={2}>
      <b>Total Rate : </b>
      </Col>
      <Col md="auto" icon="star" >
        {props.restaurant.user_rating.aggregate_rating} <Rate character={<Icon theme="filled" type="star" />} allowHalf defaultValue={props.restaurant.user_rating.aggregate_rating} />
      </Col>
      </Row>
     

    </Container>
    </div>

  )
}

export default Overview;