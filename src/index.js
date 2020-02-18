import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SignIpPage from "./components/SignInPage"
import RestaurantPage from "./thirdpage";

const routing = (
  <Router>
    <div>
      <Route exact path = "/" component={App}/>
      <Route path = "/signIn" component={SignIpPage}/>
      <Route path = "/restaurant" component={RestaurantPage}/>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
