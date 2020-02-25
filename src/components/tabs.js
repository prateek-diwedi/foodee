import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Overview from "./overview";
import PhotoCards from "./photocards"
// import ReviewsList from "./reviews";
// import MapDirection from "./directionMap"
import ReviewsList from "./addReviews"

// Data is imported from database
// import reviews from "../data/reviewsdatabase";
// User is fixed until user database is fixed


const TabMenu = props => {
  const restaurant = props.restaurant;
  const user = props.user;
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
        <ReviewsList user = {user} comments = {restaurant.all_reviews.reviews} res_id = {restaurant.id}></ReviewsList>
      </Tab>
      
      {/* <Tab eventKey = "Direction" title = "Direction Map">
       
          <MapDirection  start_lng ={-123.1278} start_lat = {49.2778}  end_lng ={restaurant.location.longitude} end_lat ={restaurant.location.latitude}/>
        
      </Tab> */}
    </Tabs>
  );
};

export default TabMenu;
