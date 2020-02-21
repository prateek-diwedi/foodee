import React, { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import "../src/index.css";
//import restaurant from "./data/resdatabase";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchDescription from "./components/SearchDescription";
import Footer from "../src/components/Footer";
import NavBar from "./components/NavBar";
const axios = require('axios');

// const thumb = restaurant.thumb;
// const name =restaurant.name;
// const hours = restaurant.timings;
// const cuisine = restaurant.cuisines;
// const location = restaurant.location;
// const user_rating = restaurant.user_rating;

const apiUrl = "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&cuisines=cafe"

function SecondPage(props) {
  const [state, setState] = useState({data:[]});
  
    
  
  const getApi = () => {
    axios
      .get(apiUrl, {headers: {"user-key": "16e9855be80e0336fe3bc1dafa559ad2"}})
      .then(response => {
        return response.data.restaurants.map(({restaurant}) => {
          return {
            id: restaurant.id,
            thumb: `${restaurant.thumb}`,
            name: `${restaurant.name}`,
            cuisine: `${restaurant.cuisine}`,
            hours: `${restaurant.hours}`,
            address: `${restaurant.location.address}`,
            avgRating: `${restaurant.user_rating.aggregate_rating}`,
            textRating: `${restaurant.user_rating.rating_text}`
          }
        })
      }).then(data => {
        console.log(data)
        setState({
          data: data,
          isLoading: false
        })
      })
      // .get("http://localhost:3001/api/v1/reviews")
      // .then(response =>{
      //   console.log("response from server",response)
      // })
        .catch(error => setState({ error, isLoading: false }))
  }

  if (state.data.length === 0) {
    getApi()
  }

  return (
  <div>
    <div>
      <NavBar></NavBar>
      <br></br>
      {(state.data || []).map((props) => {
        return (<SearchDescription key={`${props.id}`} {...props} ></SearchDescription>)
      })}
      <Footer></Footer>
    </div>
  </div>)


}

export default SecondPage;
