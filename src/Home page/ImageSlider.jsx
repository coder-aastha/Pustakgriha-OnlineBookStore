// Slider.js
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import "../css/Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
    
      backgroundImage: "url('src/images/SliderImage12.jpg')",
    },
    {
     
      
      backgroundImage: "url('src/images/SliderImage2.webp')",
    },
    {
    
       backgroundImage: "url('src/images/SliderImage4.jpg')",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container"
    style={{
      backgroundImage: slides[currentSlide].backgroundImage,
    }}>
    <div
      className="content-container" >

        {/* left side */}
        <div className="left-side">
          <div className="image-container">{slides[currentSlide].content}</div>
        </div>
        {/* right side */}
        <div className="right-side">
          <h2 className="heading">{slides[currentSlide].heading}</h2>
          <p className="paragraph">{slides[currentSlide].paragraph}</p>
          
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="slider-navigation">
        <IoIosArrowBack onClick={prevSlide} className="slider-arrow left-arrow" />
        <IoIosArrowForward onClick={nextSlide} className="slider-arrow right-arrow" />
      </div>
    </div>
  );
};

export default Slider;

