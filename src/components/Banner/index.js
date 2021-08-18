import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { GrPrevious, GrNext } from "react-icons/gr";

import { SlideData } from "./slideData";
// import "slick-carousel/slick/slick-theme.css";

const SlickPrevArrow = ({ currentSlide, slideCount, ...props }) => {
  return (
    <div
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <GrPrevious />
    </div>
  );
};

const SlickNextArrow = ({ currentSlide, slideCount, ...props }) => {
  return (
    <div
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <GrNext />
    </div>
  );
};

function Banner() {
  const slickSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    draggable: false,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
  };

  return (
    <div className="banner">
      <Slider {...slickSettings} className="banner__slider">
        {SlideData.map((item) => (
          <div key={item.id} className="banner__slider-item">
            <img src={item.img} alt="banner" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
