import React from 'react';
import PictureWithInfo from "../components/PictureWithInfo";
import PictureWithInfoReverse from "../components/PictureWithInfoRevrese";
import Footer from "../components/Footer";
import WelcomePage from "../components/WelcomePage";
import Categories from "../components/Categories";

export default function FirstPage() {

  return (
    <div>
      <WelcomePage></WelcomePage>

      <Categories></Categories>

      <PictureWithInfo></PictureWithInfo>

      <PictureWithInfoReverse></PictureWithInfoReverse>

      <Footer></Footer>
    </div>
  )
}