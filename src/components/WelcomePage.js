import React from "react";
import Button from "../components/Button"
import SearchBar from "../components/SearchBar"
import AutoText from "../components/AutoText"
import Location from "../components/Location"
import "./WelcomePage.scss"
import { Link } from 'react-router-dom'

export default function WelcomePage() {

  return (
    <div className = "welcomePage" >
		  <img src={require('../images/foodee.jpg')}/>
      <div className="login-Button">
      <Link to="/signIn">Login</Link>
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
