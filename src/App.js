import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "../src/index.css";
import restaurant from "../src/data/resdatabase";
import PhotoCarousel from "../src/components/photoCarousel";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <PhotoCarousel photoList={restaurant.photos}></PhotoCarousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
