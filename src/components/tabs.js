import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Overview from "./overview";
import PhotoCards from "./photocards"
import ReviewsList from "./reviews";
import MapDirection from "./directionMap"
// import CommentList from "./addReviews"
const TabMenu = props => {
  const restaurant = props.restaurant;
  return (
    <Tabs id="uncontrolled-tab-example">
      <Tab eventKey="Overview" title="Overview">
        <Overview restaurant={restaurant}/>
      </Tab>
      <Tab eventKey="Photos" title="Photos">
        <PhotoCards restaurant={restaurant}></PhotoCards>
      </Tab>
      <Tab eventKey="Reviews" title="Reviews">
        <ReviewsList></ReviewsList>
        {/* <CommentList></CommentList> */}
      </Tab>
      <Tab eventKey="Menu" title="Menu">
        <p>Menu</p>
      </Tab>
      <Tab eventKey = "Direction" title = "Direction Map">
        <section >
          
          <MapDirection  start_lng ={-123.1278} start_lat = {49.2778}  end_lng ={restaurant.location.longitude} end_lat ={restaurant.location.latitude}/>
          

        </section>
      {/* <MapDirection  start_lng ={-123.1278} start_lat = {49.2778}  end_lng ={-123.1027} end_lat ={49.2647}/> */}
      

      </Tab>
    </Tabs>
  );
};

export default TabMenu;
