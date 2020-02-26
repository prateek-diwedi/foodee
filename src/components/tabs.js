import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Overview from "./overview";
import PhotoCards from "./photocards";
import ReviewsList from "./addReviews";

const user = {
  username: "Apama",
  avatar: "https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_1280.png"
};


const TabMenu = props => {
  const restaurant = props.restaurant;
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
        <ReviewsList user={user} comments={restaurant.all_reviews.reviews}></ReviewsList>
      </Tab>
    </Tabs>
    </div>
  );
};

export default TabMenu;
