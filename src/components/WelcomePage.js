import React from "react";
import Button from "../components/Button"
import SearchBox from "../components/SearchBar"
import AutoText from "../components/AutoText"
import "./WelcomePage.scss"

export default function WelcomePage() {

  return (
    <div className = "welcomePage" >
		  <img src={require('../images/foodee.jpg')}/>
      <div className="login-Button">
      <Button  confirm>Login</Button>
      </div>
      <div className = "search_button_Home_page">
      <SearchBox></SearchBox>
      </div>
      <div className="autoText-welcome-page">
      <AutoText></AutoText>
      </div>
    </div>
  );
}
