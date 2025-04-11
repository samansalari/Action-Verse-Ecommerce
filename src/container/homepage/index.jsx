import React, { Fragment, useRef, useState } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import CardProduct from "../../component/card/CardProduct";
import Footer from "../../component/footer/Footer";
import ModalLogin from "../../component/modal/Login";
import ModalRegister from "../../component/modal/Register";
import Navbar from "../../component/navbar/Navbar";
import Cart from "../../component/modal/Cart";
import SliderHead from "../../component/slider/SliderHead";

const Index = () => {
  const [favorite, setFavorite] = useState([
    {
      img: "./../images/dsadas.png",
      name: "Nike Air Max 2021",
      price: "213",
      type: "Men's Shoes",
    },
    {
      img: "./../images/Bg (1).png",
      name: "Nike Air Max 2021",
      price: "213",
      type: "Men's Shoes",
    },
    {
      img: "./../images/Bg (2).png",
      name: "Nike Air Max 2021",
      price: "213",
      type: "Men's Shoes",
    },
    {
      img: "./../images/Bg (3).png",
      name: "Nike Air Max 2021",
      price: "213",
      type: "Men's Shoes",
    },
  ]);
  const [tranding, setTranding] = useState([
    {
      img: "./../images/Image (1).png",
      name: "Nike Air Max INTRLK",
      price: "213",
      type: "Men's Shoes",
    },
    {
      img: "./../images/Image (2).png",
      name: "Nike Air Max INTRLK",
      price: "213",
      type: "Men's Shoes",
    },
  ]);

  const [modalLogin, setModalLogin] = useState(false);
  const onCLickModalLogin = () => {
    console.log(!modalLogin);
    if (!modalLogin) {
      console.log("add");
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setModalLogin(!modalLogin);
  };

  const [modalRegister, setModalRegister] = useState(false);
  const onCLickModalRegister = () => {
    if (!modalRegister) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setModalRegister(!modalRegister);
  };

  const onCLickSwitchModal = async (e) => {
    if (e == "login") {
      setModalRegister(!modalRegister);
      const timeout = await setTimeout(() => {
        setModalLogin(!modalLogin);
      }, 1000);
      return () => clearInterval(timeout);
    }
    if (e == "register") {
      console.log("masuk");
      setModalLogin(!modalLogin);
      const timeout = await setTimeout(() => {
        setModalRegister(!modalRegister);
        console.log("delay");
      }, 1000);
      console.log("selesai");
      return () => clearInterval(timeout);
    }
  };

  const [cart, setCart] = useState(false);

  const onClickCart = () => {
    setCart(!cart);
  };

  return (
    <Fragment>
      <div className="overflow-hidden ">
        <ModalLogin
          modalLogin={modalLogin}
          onCLickModalLogin={() => onCLickModalLogin()}
          onCLickSwitchModal={(e) => onCLickSwitchModal(e)}
        />

        <ModalRegister
          modalRegister={modalRegister}
          onCLickModalRegister={() => onCLickModalRegister()}
          onCLickSwitchModal={(e) => onCLickSwitchModal(e)}
        />

        <Cart onClickCart={() => onClickCart()} cart={cart} />
        <div class="position-relative">
          <img
            src="./../images/Bg.png"
            className="path__1 d-none d-lg-block"
            alt=""
          />
          <div className="path__2 font__size--180 anton d-none d-lg-block">
            Nike ZoomX Streakfly
          </div>
          <Navbar
            status="homepage"
            onClickCart={() => onClickCart()}
            onCLickModalLogin={() => onCLickModalLogin()}
          />

          <section className="position-relative x-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <h5 className="extra-bold font__size--24 text__24-1024 text__24-sm text__24-xs mb-0">
                    <div className="d-inline-block text__gd-pink">
                      Road Racing Shoes
                    </div>
                  </h5>
                  <h1 className="font__size--120 text__120-1024 text__120-md text__120-xxs anton my-4">
                    Nike ZoomX <br /> Streakfly
                  </h1>
                  <p className="medium font__size--14 text__14-1024 lh-2 color__gray-1 pb-3 d-none d-lg-block">
                    Our lightest racing shoe, the Nike ZoomX Streakfly is all
                    about the <br /> speed you need to take on the competition
                    in a mile, 5K or 10K race.
                  </p>

                  <div className="d-lg-flex align-items-center my-4 d-none">
                    <div className="wrapper__select-input">
                      <select
                        className="select font__size--32 text__32-1024 text__32-xs anton"
                        name=""
                        id=""
                      >
                        <option value="" selected disabled hidden>
                          QNT
                        </option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                      </select>
                    </div>
                    <div className="wrapper__select-input mx-4">
                      <select
                        className="select font__size--32 text__32-1024 text__32-xs anton"
                        name=""
                        id=""
                      >
                        <option value="" selected disabled hidden>
                          SIZE
                        </option>
                        <option value="">28</option>
                        <option value="">32</option>
                        <option value="">45</option>
                      </select>
                    </div>
                    <h5 className="extra-bold font__size--32 text__32-1024 text__32-xs mb-0">
                      $173
                    </h5>
                  </div>

                  <div className="d-lg-flex align-items-center pt-4 d-none">
                    <a
                      href="#!"
                      className="btn btn__black shadow rounded__50 color__white btn__original semi-bold font__size--14 text__14-1024"
                    >
                      Add to Bag
                    </a>

                    <a
                      href="#!"
                      className="ml-4 medium font__size--14 text__14-1024 color__black"
                      style={{ borderBottom: "1px solid #100D22" }}
                    >
                      See Details
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 text-center position-relative">
                  <img
                    src="./../images/Bg.png"
                    className="path__1 d-lg-none"
                    alt=""
                  />
                  <SliderHead />
                </div>

                <div className="d-lg-none mt-4 mt-lg-0 position-relative z-2 bg__white">
                  <div className="d-flex align-items-center my-4">
                    <div className="wrapper__select-input">
                      <select
                        className="select font__size--32 text__32-1024 text__32-xs anton"
                        name=""
                        id=""
                      >
                        <option value="" selected disabled hidden>
                          QNT
                        </option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                      </select>
                    </div>
                    <div className="wrapper__select-input mx-4">
                      <select
                        className="select font__size--32 text__32-1024 text__32-xs anton"
                        name=""
                        id=""
                      >
                        <option value="" selected disabled hidden>
                          SIZE
                        </option>
                        <option value="">28</option>
                        <option value="">32</option>
                        <option value="">45</option>
                      </select>
                    </div>
                    <h5 className="extra-bold font__size--32 text__32-1024 text__32-xs mb-0">
                      $173
                    </h5>
                  </div>

                  <div className="d-flex align-items-center pt-4">
                    <a
                      href="#!"
                      className="btn btn__black shadow rounded__50 color__white btn__original semi-bold font__size--14 text__14-1024"
                    >
                      Add to Bag
                    </a>

                    <a
                      href="#!"
                      className="ml-4 medium font__size--14 text__14-1024 color__black"
                      style={{ borderBottom: "1px solid #100D22" }}
                    >
                      See Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="bg__black py-5">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4 my-auto">
                <div className="d-md-flex align-items-center justify-content-center color__white text-center text-md-left mb-4 mb-md-0 line__right">
                  <h5 className="anton font__size--40 text__40-1024">500+</h5>
                  <span className="medium font__size--16 text__16-1024 text__16-md ml-md-3 opacity__8">
                    Amazing products
                  </span>
                </div>
              </div>
              <div className="col-md-4 my-auto">
                <div className="d-md-flex align-items-center justify-content-center color__white text-center text-md-left mb-4 mb-md-0 line__right">
                  <h5 className="anton font__size--40 text__40-1024">40k+</h5>
                  <span className="medium font__size--16 text__16-1024 text__16-md ml-md-3 opacity__8">
                    Orders Complated
                  </span>
                </div>
              </div>
              <div className="col-md-4 my-auto">
                <div className="d-md-flex align-items-center justify-content-center color__white text-center text-md-left">
                  <h5 className="anton font__size--40 text__40-1024">32k+</h5>
                  <span className="medium font__size--16 text__16-1024 text__16-md ml-md-3 opacity__8">
                    Happy Customers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="text-center">
              <h4 className="anton font__size--50 text__50-1024 text__50-sm text__50-xs mb-5">
                Why Choose Us
              </h4>

              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                      <div className="images__choose mx-auto mb-4">
                        <img src="./../images/verified.png" alt="" />
                      </div>
                      <h5 className="bold font__size--16 text__16-1024 text__16-md">
                        Free Shipping
                      </h5>
                      <p className="medium font__size--14 text__14-1024 opacity__8">
                        Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.{" "}
                      </p>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                      <div className="images__choose mx-auto mb-4">
                        <img src="./../images/delivery.png" alt="" />
                      </div>
                      <h5 className="bold font__size--16 text__16-1024 text__16-md">
                        100% Secure Payment
                      </h5>
                      <p className="medium font__size--14 text__14-1024 opacity__8">
                        Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.{" "}
                      </p>
                    </div>
                    <div className="col-md-4">
                      <div className="images__choose mx-auto mb-4">
                        <img src="./../images/24-hours-support.png" alt="" />
                      </div>
                      <h5 className="bold font__size--16 text__16-1024 text__16-md">
                        24/7 Dedicated Support
                      </h5>
                      <p className="medium font__size--14 text__14-1024 opacity__8">
                        Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="text-center mb-5">
              <h4 className="anton font__size--50 text__50-1024 text__50-sm text__50-xs">
                Favourites on This Week
              </h4>
            </div>

            <div className="row">
              {favorite.map((obj) => {
                return (
                  <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
                    <CardProduct data={obj} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-5 bg__gray-2">
          <div className="container">
            <div className="wrapper__logo-brand flex-wrap flex-md-nowrap d-flex justify-content-center align-items-center">
              <img src="./../images/Image Logo (1).png" alt="" />
              <img src="./../images/Image Logo (2).png" alt="" />
              <img src="./../images/Image Logo (3).png" alt="" />
              <img src="./../images/Image Logo (4).png" alt="" />
              <img src="./../images/Image Logo (5).png" alt="" />
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="text-center mb-5">
              <h4 className="anton font__size--50 text__50-1024 text__50-sm text__50-xs">
                What's Trending Now
              </h4>
            </div>

            <div className="row">
              {tranding.map((obj) => {
                return (
                  <div className="col-md-6 mb-4 mb-mf-0">
                    <CardProduct data={obj} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="text-center mb-5">
              <h4 className="anton font__size--50 text__50-1024 text__50-sm text__50-xs">
                Share With #Shoppes
              </h4>
              <p className="medium color__gray-1 font__size--14 text__14-1024">
                Follow <span className="color__black">@shoppes</span> instagram
                for inspirations
              </p>
            </div>
          </div>
          <div className="container container__1024-none overflow-hidden">
            <div className="wrapper__images-share d-flex align-items-center justify-content-center justify-content-xl-between">
              <img src="./../images/Image (1a).png" alt="" />
              <img src="./../images/Image (2b).png" alt="" />
              <img src="./../images/Image (3).png" alt="" />
              <img src="./../images/Image (4).png" alt="" />
              <img src="./../images/Image (5).png" alt="" />
              <img src="./../images/Image (6).png" alt="" />
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="text-center mb-5">
              <h4 className="anton font__size--50 text__50-1024 text__50-sm text__50-xs">
                Latest From Blogs
              </h4>
              <p className="medium color__gray-1 font__size--14 text__14-1024">
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam co
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="wrapper__card-blog">
                  <img
                    src="./../images/Image (1c).png"
                    className="mb-3 img"
                    alt=""
                  />
                  <NavLink
                    to="/detail/blog"
                    className="bold font__size--16 text__16-1024 text__16-md color__black"
                  >
                    Lorem ipsum dolor sit amet
                  </NavLink>
                  <p className="medium font__size--14 text__14-1024 font-italic color__gray-1 mb-3">
                    Velit officia consequat duis enim velit mollit. Exercitation
                    veniam consequat sunt nostrud amet.
                  </p>
                  <div className="d-flex align-items-center profile">
                    <img
                      src="./../images/Image (4c).png"
                      className="img"
                      alt=""
                    />
                    <div className="ml-3">
                      <h5 className="font__size--14 text__14-1024 medium mb-0">
                        Cameron Williamson
                      </h5>
                      <p className="mb-0 medium font__size--12 text__12-1024 color__gray-1">
                        8/2/19
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="wrapper__card-blog">
                  <img
                    src="./../images/Image (2c).png"
                    className="mb-3 img"
                    alt=""
                  />
                  <NavLink
                    to="/detail/blog"
                    className="bold font__size--16 text__16-1024 text__16-md color__black"
                  >
                    Lorem ipsum dolor sit amet
                  </NavLink>
                  <p className="medium font__size--14 text__14-1024 font-italic color__gray-1 mb-3">
                    Velit officia consequat duis enim velit mollit. Exercitation
                    veniam consequat sunt nostrud amet.
                  </p>
                  <div className="d-flex align-items-center profile">
                    <img
                      src="./../images/Image (4c).png"
                      className="img"
                      alt=""
                    />
                    <div className="ml-3">
                      <h5 className="font__size--14 text__14-1024 medium mb-0">
                        Cameron Williamson
                      </h5>
                      <p className="mb-0 medium font__size--12 text__12-1024 color__gray-1">
                        8/2/19
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="wrapper__card-blog">
                  <img
                    src="./../images/Image (3c).png"
                    className="mb-3 img"
                    alt=""
                  />
                  <NavLink
                    to="/detail/blog"
                    className="bold font__size--16 text__16-1024 text__16-md color__black"
                  >
                    Lorem ipsum dolor sit amet
                  </NavLink>
                  <p className="medium font__size--14 text__14-1024 font-italic color__gray-1 mb-3">
                    Velit officia consequat duis enim velit mollit. Exercitation
                    veniam consequat sunt nostrud amet.
                  </p>
                  <div className="d-flex align-items-center profile">
                    <img
                      src="./../images/Image (4c).png"
                      className="img"
                      alt=""
                    />
                    <div className="ml-3">
                      <h5 className="font__size--14 text__14-1024 medium mb-0">
                        Cameron Williamson
                      </h5>
                      <p className="mb-0 medium font__size--12 text__12-1024 color__gray-1">
                        8/2/19
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="wrapper__subscribe-wrap bg__black text-center position-relative">
              <h5 className="mb-0 font__size--180 path__3 d-none d-mb-block">
                Subscribe Now
              </h5>
              <div className="position-relative z-2">
                <h4 className="anton font__size--50 text__50-1024 text__50-sm text__50-xs color__white">
                  Subscribe to Get 25% OFF
                </h4>
                <p className="medium font__size--14 text__14-1024 color__white opacity__5">
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.{" "}
                </p>
                <div className="wrapper__subscribe-form d-flex justify-content-between align-items-center">
                  <input
                    type="text"
                    placeholder="Enter Your Email Address"
                    className="medium font__size--14 text__14-1024 color__white w-100"
                  />
                  <button className="semi-bold font__size--14 text__14-1024 color__white btn btn__purple shadow btn__bg-sub">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer
          onClickCart={() => onClickCart()}
          onCLickModalLogin={() => onCLickModalLogin()}
          onCLickModalRegister={() => onCLickModalRegister()}
        />
      </div>
    </Fragment>
  );
};

export default Index;
