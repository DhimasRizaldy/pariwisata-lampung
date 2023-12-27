import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fotobanner1 from "../assets/images/Banner/Banner-Carousel1.png";
import fotobanner2 from "../assets/images/Banner/Banner-Carousel2.png";

const SliderBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src={fotobanner1}
          alt="Slide 1"
          className="w-full h-auto max-h-96 object-cover"
        />
      </div>
      <div>
        <img
          src={fotobanner2}
          alt="Slide 2"
          className="w-full h-auto max-h-96 object-cover"
        />
      </div>
      <div>
        <img
          src={fotobanner1}
          alt="Slide 1"
          className="w-full h-auto max-h-96 object-cover"
        />
      </div>
    </Slider>
  );
};

export default SliderBanner;
