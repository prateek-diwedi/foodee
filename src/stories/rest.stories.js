import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import "antd/dist/antd.css";

// import { action } from "@storybook/addon-actions";
//import {restaurant} from '../data/db';
//------------------------- importing components ---------------------------------//
import Button from "../components/Button";

//import photoList from "../data/db";
import restaurant from "../data/resdatabase";

import PhotoCarousel from "../components/photoCarousel"

//--------------------- Buttons -------------------- //
//const photoURL = photoList[0].photo.url;

const photoList = restaurant.photos;



storiesOf("Photo", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Logout", () => <Button danger>Logout</Button>)
  //.add("singlephoto", () => (<Photo url = {photoURL} ></Photo>))
  .add("photolists",()=>(<PhotoCarousel photoList = {photoList}></PhotoCarousel>))
