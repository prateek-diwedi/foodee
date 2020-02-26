import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Rate } from "antd";
import MapDirection from "./directionMap";
import MapModal from "./mapmodal";
import { Icon } from "antd";
// import Rating from "./Rating";
import ShareModal from "../components/ShareModal";

const axios = require("axios");


const divStyle = {
  paddingLeft: "55px",
  paddingTop: "10px"
};
const Description = props => {
  const [theme, setTheme] = useState(false);
  const [saved,setSaved] = useState(false);
  const [id,setID] = useState(null);
  console.log(props.user)

  let user_id = props.user.user_id;
  let res_id= props.restaurant.id;
  //  }
// First the page reads the favourite from table if it was liked before to change it to true
useEffect(()=>{
  axios.get("http://localhost:3001/find_favourite",
  {params: {user_id:user_id,
            res_id :res_id}})
  .then(response=>{
    // console.log(favourite)
    console.log('---->>>>>>>>>>>',response.data)
    if (response.data){
      setTheme(!theme);
      setSaved(!saved);
      setID(response.data.id);
    }
  })
  .catch(e=>console.log(e))
},[])
  
console.log(`theme changed to ${theme} and saved changed to ${saved}`);

  const handleliked = () => {
    console.log(id)
     let favourite = {
       id: id,
      user_id: props.user.user_id,
      res_id: props.restaurant.id 
     }
     console.log('favourite',favourite)
     if (saved){
       // need to DELTE 
       axios
       .delete(`http://localhost:3001/favourites`, 
       {params: {id:id}})
        .then(response => {
         setTheme(!theme);
         setSaved(!saved);
        //  setID(id);
           console.log(`theme changed to ${theme} and saved changed to ${saved}`);
           console.log(`DELETE response is ${response}`)
         })
         .catch(e=>{console.log(e)})
     } else {
       // need to POST
       axios
       .post("http://localhost:3001/favourites", 
        {favourite}
       )
        .then(response => {
         setTheme(!theme);
         setSaved(!saved);
         setID(response.data.favourite.id);
         console.log(`theme changed to ${theme} and saved changed to ${saved}`);
         console.log(response.data)
         })
         .catch(e=>{console.log(e)})
     }
  };

  
 
  return (
    <div style={divStyle}>
      <Row>
        <Col>
          <h1>{props.name}</h1>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={1}>
          <b>Cuisine:</b>
        </Col>
        <Col md="auto">{props.cuisine}</Col>
      </Row>
      <Row>
        <Col sm={1}>
          <b>Hours: </b>
        </Col>
        <Col md="auto">{props.hours}</Col>
      </Row>
      <Row>
        <Col sm={1}>
          <b>Address: </b>
        </Col>
        <Col md="auto">{props.location.address}</Col>
      </Row>
      <Row>
        <Col md="auto">
          <Rate
            disabled
            allowHalf
            defaultValue={Number(props.user_rating.aggregate_rating)}
          />
        </Col>
        <Col md="auto">{Number(props.user_rating.aggregate_rating)}</Col>
        <Col md="auto">{props.user_rating.rating_text}</Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md="auto">
          <Icon
           theme = {theme? 'filled':'outlined'}
            type="like"
            style={{ fontSize: "40px", color: "#08c" }}
            onClick={handleliked}
          />
        </Col>

        <Col md="auto">
          <MapModal>
            <MapDirection
              // start_lng={props.user_loc.lan}
              // start_lat={props.user_loc.lat}
              start_lat={49.2813} 
              start_lng={-123.1151} 
              end_lng={props.location.longitude}
              end_lat={props.location.latitude}
            />
          </MapModal>
        </Col>
        <Col md="auto">
          <ShareModal rst_id={props.restaurant.id}/>
        </Col>
      </Row>
      {/* <Row>
        <Rating restaurant = {props.restaurant} user = {props.user}>

        </Rating>
      </Row> */}
    </div>
  );
};

export default Description;
