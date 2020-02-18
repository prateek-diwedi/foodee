import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Overview from "./overview";
import PhotoCards from "./photocards"
// import ReviewsList from "./reviews";
import MapDirection from "./directionMap"
import ReviewsList from "./addReviews"

// Data is imported from database
import reviews from "../data/reviewsdatabase";
// User is fixed until user database is fixed
const user = {username : "Apama",
              avatar : "https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_1280.png"};


const TabMenu = props => {
  const restaurant = props.restaurant;
  return (
    <Tabs id="uncontrolled-tab-example">
      <Tab eventKey="Overview" title="Overview">
        <Overview restaurant={restaurant}/>
      </Tab>
      <Tab eventKey="Photos" title="Photos">
        <br/>
        <PhotoCards restaurant={restaurant}></PhotoCards>
      </Tab>
      <Tab eventKey="Reviews" title="Reviews">
        <ReviewsList user = {user} comments = {reviews.user_reviews}></ReviewsList>
      </Tab>
      <Tab eventKey="Menu" title="Menu">
        <p>Menu</p>
      </Tab>
      <Tab eventKey = "Direction" title = "Direction Map">
        <section >
          <MapDirection  start_lng ={-123.1278} start_lat = {49.2778}  end_lng ={restaurant.location.longitude} end_lat ={restaurant.location.latitude}/>
        </section>
      </Tab>
    </Tabs>
  );
};

export default TabMenu;
