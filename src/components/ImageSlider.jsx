// Slider.js
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import "../css/Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      heading: "''Sometimes the one who loves  you is the one who hurts you the most''",
      paragraph:
        "- COLLEN HOVER",
        content: <img src="src/images/SliderImage3.png" alt="Second Slide" />,
    },
    {
      heading: "20% discount",
      paragraph: "Pustakgriha not only empowers consumers to be safer online but also enables companies to provide a better privacy experience to their customers",
      content: <img src="src/images/SliderImage4.jpg" alt="Second Slide" />,
    },
    {
      heading: "A book a day keeps reality away",
      paragraph: "Marieke Nijkamp",
      content: <img src="src/images/SliderImage1.jpg" alt="Third Slide" />,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      <div className="content-container">
        {/* left side */}
        <div className="left-side">
          <h2 className="heading">{slides[currentSlide].heading}</h2>
          <p className="paragraph">{slides[currentSlide].paragraph}</p>
        </div>
        {/* right side */}
        <div className="right-side">
          {slides[currentSlide].content}
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
Slider.js

