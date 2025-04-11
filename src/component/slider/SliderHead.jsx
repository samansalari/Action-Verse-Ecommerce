import React, { Fragment, useState } from "react";
import Slider from "react-slick";

const SliderHead = () => {
  const productImagesHead = [
    "./../images/kjhk.png",
    "./../images/hjrtdr.png",
    "./../images/tyrt.png",
    "./../images/hgjghj.png",
    "./../images/kjhk.png",
    "./../images/hjrtdr.png",
    "./../images/tyrt.png",
    "./../images/hgjghj.png",
  ];
  const productImagesSecond = [
    "./../images/Image (7).png",
    "./../images/Image (ss6).png",
    "./../images/ddfsf.png",
    "./../images/hgffg.png",
    "./../images/Image (7).png",
    "./../images/Image (ss6).png",
    "./../images/ddfsf.png",
    "./../images/hgffg.png",
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
        className="wrapper__slider-head mb-4"
      >
        {productImagesHead.map((obj) => {
          return (
            <div className="items">
              <img className="mx-auto" src={obj} alt="" />
            </div>
          );
        })}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        {...settings2}
        className="wrapper__slider-head-pagiantion"
      >
        {productImagesSecond.map((obj) => {
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

export default SliderHead;
