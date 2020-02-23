import React from 'react';
import ReactDOM from 'react-dom';
import { Route,  Switch,  BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SignIpPage from "./components/SignInPage"
import RestaurantPage from "./thirdpage";
import SearchPage from "./SecondPage";
//import history from "./history"

const routing = (
  <Router >
    <div>
      <Switch>
      <Route exact path = "/" component={App}/>
      <Route path = "/signIn" component={SignIpPage}/>
      <Route path= "/restaurant/:restaurant_id" component={RestaurantPage}/>
      <Route path = "/search/:lat/:lon/:search" component={SearchPage}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
