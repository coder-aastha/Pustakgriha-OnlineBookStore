import React from "react";

import Navbar from "../components/Navbar";
import FooterUI from "../components/FooterUI";
import ImageSlider from "../Home page/ImageSlider";
import Genres from "../Home page/Genres";
import BestSellers from "../Home page/BestSellers";
import NewArrivals from "../Home page/NewArrivals";
import Author from "../Home page/Author";


export const Home = () => {
  return (
    <>
        <Navbar />
      <ImageSlider />
      <Genres />
      <BestSellers/>
      <NewArrivals />
      <Author />
      <FooterUI/>
    </>
  );
};

export default Home;
