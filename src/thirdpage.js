import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "../src/index.css";
import restaurant from "../src/data/resdatabase";
import PhotoCarousel from "../src/components/photoCarousel";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Description from "./components/description";
import TabMenu from "./components/tabs";

const name =restaurant.name;
const hours = restaurant.timings;
const cuisine = restaurant.cuisines;
const location = restaurant.location;
const user_rating = restaurant.user_rating;

function ThirdPage() {
  return (
    <div>
      <div className="App">
        <Container>
          <Row>
            <Col>
              <PhotoCarousel photoList={restaurant.photos}></PhotoCarousel>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Description
          name={name}
          hours={hours}
          cuisine={cuisine}
          location={location}
          user_rating = {user_rating}
        ></Description>
      </div>
      <div>
        <Container>
         <TabMenu restaurant = {restaurant}>
        </TabMenu> 
        </Container>
        
      </div>
    </div>
  );
}

export default ThirdPage;
