import React from "react";
import Slider from "react-slick";
import { GrPrevious, GrNext } from "react-icons/gr";

import { SlideData } from "./slideData";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => {
  return (
    <div {...props}>
      <GrPrevious />
    </div>
  );
};

const NextArrow = (props) => {
  return (
    <div {...props}>
      <GrNext />
    </div>
  );
};

function Banner() {
  const slickSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    draggable: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
