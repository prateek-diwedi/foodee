import React, { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import "../src/index.css";
import { Link, useHistory } from "react-router-dom"
//import restaurant from "./data/resdatabase";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchDescription from "./components/SearchDescription";
import Footer from "../src/components/Footer";
import NavBar from "./components/NavBar";
import SearchCategories from "./components/SearchCategories";
import Text from "./components/Text";
import Loading from "./components/Loading"
const axios = require('axios');




const ZOMATO_API_KEY = process.env.REACT_APP_ZOMATO_KEY

//console.log("api key ----", ZOMATO_API_KEY)
function SecondPage(props) {
  const [search, setSearch] = useState({});
  // console.log()
  const history = useHistory(
    
  );
  const onClick = () => {
    console.log("inside the submit")
    history.push(`/search/${props.match.params.lat}/${props.match.params.lon}/${search}`)
    window.location.reload()
  };
  // console.log("props--->", props)
  const [state, setState] = useState({data:[], isLoading: true});
  
  // const apiUrl = `https://developers.zomato.com/api/v2.1/search?lat=${props.match.params.lat}&lon=${props.match.params.lon}`

  const apiUrl = ` https://developers.zomato.com/api/v2.1/search?count=23&q=${props.match.params.search}&lat=${props.match.params.lat}&lon=${props.match.params.lon}&radius=15000`
    
  
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
        // console.log(data)
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
    { state.isLoading ? (
      <Loading/>
    ) : (
    <div>
      <NavBar setSearch={setSearch} onClick={onClick}></NavBar>
   
     
      <SearchCategories></SearchCategories>
     
      <Text></Text>
      <br></br>
      {(state.data || []).map((props) => {
        return (<Link style={{ textDecoration: 'none', color: 'white' }} to={`/restaurant/${props.id}`}><SearchDescription key={`${props.id}`} {...props} ></SearchDescription></Link>)
      })}
      <br></br>
      <Footer></Footer>
    </div>
  )}
  </div>
  
  
  )


}

export default SecondPage;
