import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "../src/index.css";
import restaurant from "./data/resdatabase";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchDescription from "./components/SearchDescription";

const thumb = restaurant.thumb;
const name =restaurant.name;
const hours = restaurant.timings;
const cuisine = restaurant.cuisines;
const location = restaurant.location;
const user_rating = restaurant.user_rating;

function SecondPage() {
  return (
    <div>
      <div>
        <SearchDescription
          thumb={thumb}
          name={name}
          hours={hours}
          cuisine={cuisine}
          location={location}
          user_rating = {user_rating}
        ></SearchDescription>
      </div>

    </div>
  );
}

export default SecondPage;
