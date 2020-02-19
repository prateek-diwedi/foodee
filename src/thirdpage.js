import React from "react";
import "./thirdpage.scss";
import "antd/dist/antd.css";
import "../src/index.css";
import restaurant from "./data/resdatabase";
import PhotoCarousel from "./components/photoCarousel";
import { Col, Container, Row } from "react-bootstrap";
import Description from "./components/description";
import TabMenu from "./components/tabs";
import "bootstrap/dist/css/bootstrap.min.css";

const name =restaurant.name;
const hours = restaurant.timings;
const cuisine = restaurant.cuisines;
const location = restaurant.location;
const user_rating = restaurant.user_rating;

function ThirdPage() {
  return (
    <div>
      <div className="third_page">
        <Container>

            <Row>
              <Col>
                <PhotoCarousel photoList={restaurant.photos}></PhotoCarousel>
              </Col>
            </Row>
        </Container>
      </div>
      <br/>
      <div>
        <Description
          name={name}
          hours={hours}
          cuisine={cuisine}
          location={location}
          user_rating = {user_rating}
        ></Description>
      </div>
      <br/>
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
