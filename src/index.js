import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SignIpPage from "./components/SignInPage";
import RestaurantPage from "./thirdpage";
import SearchPage from "./SecondPage";
import SignUp from './components/SignUp';
import ShareButton from "./components/ShareButtons";

const routing = (
  <Router >
    <div>
      <Switch>
        <Route exact path = "/" component={App}/>
        <Route path = "/signIn" component={SignIpPage}/>
        <Route path = "/SignUp"  component={SignUp}/>
        <Route path= "/restaurant/:restaurant_id" component={RestaurantPage} render={(routeProps) => 
          <RestaurantPage {...routeProps} />}  />
        <Route path = "/search/:lat/:lon/:search" component={SearchPage}/>
        {/* <Route path = "/profile/:username" component= */}
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
