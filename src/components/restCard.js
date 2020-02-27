import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchDescription from "./SearchDescription";
import axios from "axios";
const ZOMATO_API_KEY = process.env.REACT_APP_ZOMATO_KEY;

const RestaurantCard = props => {
  const [state, setState] = useState({});
  useEffect(()=>{
  axios({
    url: "https://developers.zomato.com/api/v2.1/restaurant",
    method: "get",
    params: {
      res_id: props.res_id
    },
    headers: {
      Accept: "application/json",
      "user-key": ZOMATO_API_KEY
    },
    responseType: "json"
  })
    .then(response => {
      const restaurant = response.data;
      setState({
        id: restaurant.id,
        thumb: `${restaurant.thumb}`,
        name: `${restaurant.name}`,
        cuisine: `${restaurant.cuisines}`,
        hours: `${restaurant.timings}`,
        address: `${restaurant.location.address}`,
        avgRating: `${restaurant.user_rating.aggregate_rating}`,
        textRating: `${restaurant.user_rating.rating_text}`,
        averageCost: `${restaurant.average_cost_for_two}`
      });
    })
    .catch((e) => {console.log(e)});
  },[])

  return (
    <div>
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={`/restaurant/${state.id}/49.2813/-123.1151`}
      >
        <SearchDescription key={`${state.id}`} {...state}></SearchDescription>
      </Link>
    </div>
  );
};

export default RestaurantCard;
