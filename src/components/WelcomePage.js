import React, { Component } from 'react';
import Button from "../components/Button"
import SearchBar from "../components/SearchBar"
import AutoText from "../components/AutoText"
import Location from "../components/LocationWithCoordinates"
import "./WelcomePage.scss"
import { Link, useHistory } from 'react-router-dom'
import Background_Video from "../components/Background-Video"
//import history from "../history"

export default function WelcomePage() {
  const history = useHistory();
  return (
    <div className = "welcomePage" >
		  {/* <img src={require('../images/foodee.jpg')}/> */}
      <div className="background_video">
      <Background_Video></Background_Video>
      </div>
      <div className="login-Button">
        
      <Button confirm onClick={() => history.push('/signIn')}>Login</Button>
      </div>
      <div className = "search_bar_Home_page">
      <SearchBar></SearchBar>
      </div>
      <div className="autoText-welcome-page">
      <AutoText></AutoText>
      </div>
      <div className="location-front-page">
        <Location></Location>
      </div>
    </div>
  );
}
