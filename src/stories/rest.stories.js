import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import "antd/dist/antd.css";

// import { action } from "@storybook/addon-actions";
//import {restaurant} from '../data/db';
//------------------------- importing components ---------------------------------//
import Button from "../components/Button";

//import photoList from "../data/db";
import restaurant from "../data/resdatabase";

import PhotoCarousel from "../components/photoCarousel";

import Description from "../components/description";
//--------------------- Buttons -------------------- //
//const photoURL = photoList[0].photo.url;

const photoList = restaurant.photos;
const name = restaurant.name;
const hours = restaurant.timings;
const cuisine = restaurant.cuisines;
const location = restaurant.location.address;
const user_rating = restaurant.user_rating;

storiesOf("Photo", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Logout", () => <Button danger>Logout</Button>)
  //.add("singlephoto", () => (<Photo url = {photoURL} ></Photo>))
  .add("photolists", () => (
    <PhotoCarousel photoList={photoList}></PhotoCarousel>
  ))
  .add("description", () => (
    <Description
      name={name}
      hours={hours}
      cuisine={cuisine}
      location={location}
      user_rating={user_rating}
    ></Description>
  ));
