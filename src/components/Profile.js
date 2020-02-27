import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";
import "../components/ProfileCard.scss";
import Loading from "../components/Loading";
import RestaurantCard from "../components/restCard";

export default function Profile() {
  const [state, setState] = useState({ data: [], isLoading: true });

  let loggedInUser = Cookies.get("name");
  let loggedUserId = Cookies.get("id");
  let loggedUserEmail = Cookies.get("email");

  useEffect(() => {
    axios
      .get("http://localhost:3001/user_favourite", {
        params: {
          user_id: loggedUserId
        }
      })
      .then(response => {
        setState({
          data: response.data,
          isLoading: false
        });
      })
      .catch(error => setState({ error, isLoading: false }));
  }, []);

  console.log("state.data----->", state.data);
  return (
    <div>
      {state.isLoading ? (
        <Loading />
      ) : (
        <div>
          <NavBar />
          <div className="UserProfilecard">
            <img
              class="card-img-top"
              src="https://joeschmoe.io/api/v1/random"
              alt="Card"
            />
          </div>
          <div class="profile-card-body">
            <h4 class="card-title">
              <b>Username:</b> {loggedInUser}
            </h4>
            <p class="card-text">
              <b>email :</b> {loggedUserEmail}
            </p>
            <h3>Your favourite restuarents are:</h3>
          </div>
          <br></br>
          {state.data.length === 0 ? (
            <div></div>
          ) : (
            (state.data || []).map(faveItem => {
              return <RestaurantCard res_id={faveItem.res_id}></RestaurantCard>;
            })
          )}
          <br></br>
          <Footer />
        </div>
      )}
    </div>
  );
}
