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

// const thumb = restaurant.thumb;
// const name =restaurant.name;
// const hours = restaurant.timings;
// const cuisine = restaurant.cuisines;
// const location = restaurant.location;
// const user_rating = restaurant.user_rating;


const ZOMATO_API_KEY = process.env.REACT_APP_ZOMATO_KEY

//console.log("api key ----", ZOMATO_API_KEY)
function SecondPage(props) {
  console.log("props--->", props)
  const [state, setState] = useState({data:[]});
  
  const apiUrl = `https://developers.zomato.com/api/v2.1/search?lat=${props.match.params.lat}&lon=${props.match.params.lon}`
    
  
  const getApi = () => {
    axios
      .get(apiUrl, {headers: {"user-key": ZOMATO_API_KEY}})
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
        return (<Link to={`/restaurant/${props.id}`}><SearchDescription key={`${props.id}`} {...props} ></SearchDescription></Link>)
      })}
      <Footer></Footer>
    </div>
  </div>)


}

export default SecondPage;
