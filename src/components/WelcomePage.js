import React, { Component, useState } from 'react';
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import AutoText from "../components/AutoText";
import Location from "../components/LocationWithCoordinates";
import "./WelcomePage.scss";
import { Route, Link, useHistory } from 'react-router-dom';
import Background_Video from "../components/Background-Video";
import Cookies from 'js-cookie';
import FoodeeLogo from "../components/Foodee"


export default function WelcomePage(props) {
  const history = useHistory();
  //store lat ln  as state
  const [coordinates, setCoordinates] = useState({});
  // state coming from search box
  const [search, setSearch] = useState({});

  let loggedInUser = Cookies.get('name')

  const onSubmit = () => {
    history.push(`/search/${coordinates.coords.lat}/${coordinates.coords.lng}/${search}`)
  };

  const logoutUser = () => {
    Cookies.remove('name');
    window.location.reload();
  }

  return (
    <div className="welcomePage" >
      <div className="background_video">
        <Background_Video></Background_Video>
      </div>

      <div className="foodeeLogo">
        <FoodeeLogo/>
      </div>
      {loggedInUser ? (
        <div className="logout-Button">
          <Button danger onClick={logoutUser}>Logout</Button>
        </div>
      ) : (
          <div className="login-Button">
            <Button confirm onClick={() => history.push('/signIn')}>Login</Button>
          </div>
        )
      }
      <div className="search_bar_Home_page">
        <SearchBar setSearch={setSearch} onSubmit={onSubmit}></SearchBar>
      </div>
      <div className="autoText-welcome-page">
        <AutoText></AutoText>
      </div>
      <div className="location-front-page">
        <Location setCoordinates={setCoordinates}></Location>
      </div>
    </div>
  );
}

