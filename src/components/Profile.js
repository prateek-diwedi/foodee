import React, { useState } from "react";
import SearchDescription from "./SearchDescription";
import Cookies from "js-cookie";
import NavBar from "../components/ViewNavBar";
import Footer from '../components/Footer';
import axios from "axios";
import "../components/ProfileCard.scss";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

export default function Profile(props) {
  const user = Cookies.get('name')
  const email = Cookies.get('email')
  const ZOMATO_API_KEY = process.env.REACT_APP_ZOMATO_KEY
  const [state, setState] = useState({ data: [], isLoading: true });
  const apiUrl = `https://developers.zomato.com/api/v2.1/search?count=5&lat=49.2827&lon=-123.1207`

  const getApi = () => {
    axios
      .get(apiUrl, { headers: { "user-key": ZOMATO_API_KEY } })
      .then(response => {
        return response.data.restaurants.map(({ restaurant }) => {
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
      {state.isLoading ? (
        <Loading />
      ) : (
          <div>
            <NavBar />
            <div className="UserProfilecard" >
              <img class="card-img-top" src="https://joeschmoe.io/api/v1/random" alt="Card image" />
            </div>
            <div class="profile-card-body">
              <h4 class="card-title"><b>Username:</b> {user}</h4>
              <p class="card-text"><b>email :</b> {email}</p>
              <h3>Your favourite restuarents are:</h3>
            </div>
            <br></br>
            {(state.data || []).map((props) => {
              return (<Link style={{ textDecoration: 'none', color: 'white' }} to={`/restaurant/${props.id}/my/fav`}><SearchDescription key={`${props.id}`} {...props} ></SearchDescription></Link>)
            })}
            <br></br>
            <Footer />
          </div>
        )}
    </div>
  )
}