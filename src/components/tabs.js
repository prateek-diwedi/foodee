import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Overview from "./overview";
import PhotoCards from "./photocards"
import ReviewsList from "./reviews";
const TabMenu = props => {
  const restaurant = props.restaurant;
  return (
    <Tabs id="uncontrolled-tab-example">
      <Tab eventKey="Overview" title="Overview">
        <Overview />
      </Tab>
      <Tab eventKey="Photos" title="Photos">
        <PhotoCards restaurant={restaurant}></PhotoCards>
      </Tab>
      <Tab eventKey="Reviews" title="Reviews">
        <ReviewsList></ReviewsList>
      </Tab>
      <Tab eventKey="Menu" title="Menu">
        <p>Menu</p>
      </Tab>
    </Tabs>
  );
};

export default TabMenu;
