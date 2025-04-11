import React, { useRef, Fragment, useState } from "react";
import Slider from "react-slick";

const SliderDerailPreview = (props) => {
  const productPreview = [
    "./../images/Image(d).png",
    "./../images/Image (1d).png",
    "./../images/Image (2d).png",
    "./../images/Image (3d).png",
    "./../images/Image(d).png",
    "./../images/Image (1d).png",
    "./../images/Image (2d).png",
    "./../images/Image (3d).png",
  ];
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <Fragment>
      <Slider
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        {...settings}
        className="wrapper__slider-preview mb-4"
      >
        {productPreview.map((obj) => {
          return (
            <div className="items">
              <img src={obj} alt="" />
            </div>
          );
        })}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        {...settings2}
        className="wrapper__slider-preview-pagiantion"
      >
        {productPreview.map((obj) => {
          return (
            <div className="items">
              <img src={obj} alt="" />
            </div>
          );
        })}
      </Slider>
    </Fragment>
  );
};

export default SliderDerailPreview;
