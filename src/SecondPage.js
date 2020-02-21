import React, { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import "../src/index.css";
import { Link } from "react-router-dom"
//import restaurant from "./data/resdatabase";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchDescription from "./components/SearchDescription";
import Footer from "../src/components/Footer";
import NavBar from "./components/NavBar";
const axios = require('axios');



const apiUrl = "https://developers.zomato.com/api/v2.1/search?lat=49.2827&lon=-123.1207"

const ZOMATO_API_KEY = process.env.REACT_APP_ZOMATO_KEY

console.log("api key ----", ZOMATO_API_KEY)
function SecondPage(props) {
  const [state, setState] = useState({data:[]});
  
    
  
  const getApi = () => {
    axios
      .get(apiUrl, {headers: {"user-key": ZOMATO_API_KEY}})
      .then(response => {
        return response.data.restaurants.map(({restaurant}) => {
          return {
            id: restaurant.id,
            thumb: `${restaurant.thumb}`,
            name: `${restaurant.name}`,
            cuisine: `${restaurant.cuisines}`,
            hours: `${restaurant.timings}`,
            address: `${restaurant.location.address}`,
            avgRating: `${restaurant.user_rating.aggregate_rating}`,
            textRating: `${restaurant.user_rating.rating_text}`,
            averageCost: `${restaurant.average_cost_for_two}`
          }
        })
      }).then(data => {
        console.log(data)
        setState({
          data: data,
          isLoading: false
        })
      })
      
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
        return (<Link to={`/restaurant/${props.id}`}><SearchDescription key={`${props.id}`} {...props} ></SearchDescription></Link>)
      })}
      <Footer></Footer>
    </div>
  </div>)


}

export default SecondPage;
