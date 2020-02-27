import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Overview from "./overview";
import PhotoCards from "./photocards";
import ReviewsList from "./addReviews";

// Data is imported from database
// import reviews from "../data/reviewsdatabase";
// User is fixed until user database is fixed


const TabMenu = props => {
  const restaurant = props.restaurant;
  const user = props.user;
  const comments = props.comments;
  return (
    <div className="tabMenuClass">
    <Tabs id="uncontrolled-tab-example">
      <Tab eventKey="Overview" title="Overview">
        <Overview restaurant={restaurant} />
      </Tab>
      <Tab eventKey="Photos" title="Photos">
        <br />
        <PhotoCards restaurant={restaurant}></PhotoCards>
      </Tab>
      <Tab eventKey="Reviews" title="Reviews">
        <ReviewsList user = {user} comments = {comments} res_id = {restaurant.id}></ReviewsList>
      </Tab>
    </Tabs>
    </div>
  );
};

export default TabMenu;
