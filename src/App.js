import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "../src/index.css";
import restaurant from "../src/data/resdatabase";
import PhotoCarousel from "../src/components/photoCarousel";

function App() {
  return (
    <div className="App">
      <PhotoCarousel photoList={restaurant.photos}></PhotoCarousel>
    </div>
  );
}

export default App;
