import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from './Navbar';
import ImageSlider from "./ImageSlider";
import Genres from "./Genres";
import BestSellers from "./BestSellers";
import NewArrivals from ".//NewArrivals";
import Author from "./Author";
import FooterUI from "./FooterUI";
import AboutUs from "./AboutUs";

export const Home = () => {
  return (
    <div>
      <ImageSlider />
      <Genres />
      <BestSellers />
      <NewArrivals />
      <Author />
      {/* <FooterUI /> */}
    </div>
  );
};

export default Home;
