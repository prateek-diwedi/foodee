import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

//------------------------- importing components ---------------------------------//
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import PictureWithInfo from "../components/PictureWithInfo";
import NavBar from "../components/NavBar";
import PictureWithInfoReverse from "../components/PictureWithInfoRevrese";
import Footer from "../components/Footer";
import WelcomePage from "../components/WelcomePage";
import AutoText from "../components/AutoText";
import Categories from "../components/Categories";
import Location from "../components/Location";
import SearchCategories from "../components/SearchCategories";
import SignInPage from "../components/SignInPage";
import FirstPage from "../components/firstPage";
import SearchCard from "../SecondPage";
import Text from "../components/Text";
import Profile from "../components/Profile";
import ViewNavBar from "../components/ViewNavBar";
import Background_Video from "../components/Background-Video";
import LocationWithCoords from "../components/LocationWithCoordinates";
import ShareButton from "../components/ShareButtons"
import ShareModal from "../components/ShareModal"
import Foodeelogo from "../components/Foodee"

//-------------------------------- categories Data ----------------------------------//


// -------------------------------- Location ----------------------------------------//


// ---------------------------------- Search Data ----------------------------------- //


// ----------------------------------- Restaurant ----------------------------------- //


// ------------------------------------- Reviews ------------------------------------- //

// -----------------------------------  stories -------------------------------------//

//--------------------- Buttons -------------------- //
storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Base", () => <Button>Base</Button>)
  .add("Login", () => <Button confirm>Login</Button>)
  .add("Logout", () => <Button danger>Logout</Button>)
  .add("Prateek", () => <Button danger>Prateek</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));

  // --------------------------------- Search Bar -------------------------- //
  storiesOf("SearchBar", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Search Bar", () => <SearchBar>Search</SearchBar>)
  .add("Clickable", () => (
    <SearchBar 
    onSearch={action("onSearch")}
    />
  ))

  // ----------------------------------- Picture with image ---------------------------- //
  storiesOf("PictureWithInfo", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Food Picture", () => <PictureWithInfo>Picture</PictureWithInfo>)

  // ----------------------------------- NavBar ---------------------------- //
  storiesOf("NavBar", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Nav Bar", () => <NavBar>Nav Bar</NavBar>)

  // ----------------------------------- Picture with image Reverse ---------------------------- //
  storiesOf("PictureWithInfoReverse", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Food Picture", () => <PictureWithInfoReverse>Picture</PictureWithInfoReverse>)

  // ------------------------------------- Footer ----------------------------------------------- //
  storiesOf("Footer", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Footer", () => <Footer>Footer</Footer>)

  // -------------------------------------- welcome page -------------------------------------------- //
  storiesOf("WelcomePage", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Welcome Page", () => <WelcomePage>Welcome</WelcomePage>)

  // --------------------------------------- Auto Text --------------------------------------------------//
  storiesOf("AutoText", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Auto Text", () => <AutoText>Auto</AutoText>)

  // --------------------------------------- Categories ------------------------------------------------ //
  storiesOf("Categories", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Categories", () => <Categories>Categories</Categories>)

  // -------------------------------------------- Location ---------------------------------------------- //
  storiesOf("Location", module)
  .add("Location", () => <Location>Location</Location>)

  // -------------------------------------------- Sign In Page ----------------------------------------- //
  storiesOf("SignInPage", module)
  .add("Sign In Page", () => <SignInPage></SignInPage>)

  //-----------------------------------------------  first Page--------------------------------------- //
  storiesOf("firstPage", module)
  .add("First Page", () => <FirstPage></FirstPage>)


  //------------------------------------------- search card -----------------------------------//
  storiesOf("Search Card", module)
  .add("Search Card", () => <SearchCard></SearchCard>)

  // ------------------------------------------------- Video ----------------------------------------- //
  storiesOf("Background Video", module)
  .add("Background Video", () => <Background_Video></Background_Video>)

  // ------------------------------------------------- Restaurant Page ---------------------------------- //
  // storiesOf("Restaurant Page", module)
  // .add("Restaurant Page", () => <RestaurantPage></RestaurantPage>)

 // ------------------------------------------------- Location with coords ---------------------------------- //
storiesOf("location with coords", module)
.add("Location with coords", () => <LocationWithCoords/>)

 // ------------------------------------------------- Search Category ---------------------------------- //

 storiesOf("SearchCategories", module)
 .add("SearchCategories", () => <SearchCategories>Search Categories</SearchCategories>)

 // ------------------------------------------------- Text  ---------------------------------- //
 storiesOf("Text", module)
 .add("Text", () => <Text>Text</Text>)


 // ------------------------------------------------- profile  ---------------------------------- //
 storiesOf("Profile", module)
 .add("Profile", () => <Profile>Profile</Profile>)


 // ------------------------------ share button ---------------------------------------
 storiesOf("Share Button", module)
 .add("Share Button", () => <ShareButton>Share</ShareButton>)


 // ------------------------------ share Modal ---------------------------------------
 storiesOf("Share Modal", module)
 .add("Share Modal", () => <ShareModal>Share</ShareModal>)
 
   // ----------------------------------- ViewNavBar ---------------------------- //
   storiesOf("ViewNavBar", module)
   .addParameters({
     backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
   })
   .add("ViewNav Bar", () => <ViewNavBar>View Nav Bar</ViewNavBar>)

   // ----------------------------------- Foodee Logo ---------------------------- //
   storiesOf("Logo", module)
   .addParameters({
     backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
   })
   .add("Logo", () => <Foodeelogo/>)