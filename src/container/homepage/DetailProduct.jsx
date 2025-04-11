import React, { useState, Fragment } from "react";
import RatingForm from "react-rating";

import Footer from "../../component/footer/Footer";
import ModalLogin from "../../component/modal/Login";
import ModalRegister from "../../component/modal/Register";
import Navbar from "../../component/navbar/Navbar";
import Cart from "../../component/modal/Cart";
import SliderDerailPreview from "../../component/slider/SliderDerailPreview";
import Rating from "../../component/other/Rating";
import CardProduct from "../../component/card/CardProduct";
import CardListReview from "../../component/card/CardListReview";

const DetailProduct = (props) => {
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

  const [relate, setRelate] = useState([
    {
      img: "./../images/Imagex.png",
      name: "Nike Air Max 2021",
      price: "213",
      type: "Men's Shoes",
    },
    {
      img: "./../images/Image (1x).png",
      name: "Nike Air Max 2021",
      price: "213",
      type: "Men's Shoes",
    },
    {
      img: "./../images/Image (2x).png",
      name: "Nike Air Max 2021",
      price: "213",
      type: "Men's Shoes",
    },
    {
      img: "./../images/Image (3x).png",
      name: "Nike Air Max 2021",
      price: "213",
      type: "Men's Shoes",
    },
  ]);

  const [review, setReview] = useState([
    {
      name: "Kristin Watson",
      date: "8/2/19",
      profile: "./../images/Imagesas.png",
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
      images: [],
    },
    {
      name: "Kristin Watson",
      date: "8/2/19",
      profile: "./../images/Imagesas.png",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
      images: [
        "./../images/Image44.png",
        "./../images/Image45.png",
        "./../images/Image46.png",
      ],
    },
  ]);
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

        <Navbar
          onClickCart={() => onClickCart()}
          onCLickModalLogin={() => onCLickModalLogin()}
        />

        <section className="pt-4">
          <div className="container">
            <h5 className="medium font__size--12 text__12-1024 mb-5">
              <span className="color__gray-1">description / Shoes /</span> Nike
              Air Max INTRLK{" "}
            </h5>

            <div className="row mb-5">
              <div className="col-lg-6 col-xl-5 mb-4 mb-lg-0">
                <SliderDerailPreview />
              </div>
              <div className="col-lg-6 col-xl-7 pl-lg-3 pl-xl-5">
                <h4 className="anton font__size--40 text__40-1024 text__40-md text__40-mm">
                  Nike Air Max INTRLK
                </h4>
                <p className="bold font__size--16 text__16-1024 text__16-md color__gray-1 mb-3">
                  Men's Shoes
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="extra-bold font__size--32 text__32-1024 text__32-xs mb-0">
                    $173
                  </h5>
                  <div className="d-flex align-items-center">
                    <Rating rating={5} />
                    <span className="medium font__size--14 text__14-1024 ml-2">
                      (15 Reviews)
                    </span>
                  </div>
                </div>

                <hr className="my-4" />

                <p className="medium font__size--14 text__14-1024  color__gray-1 lh-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  justo turpis massa tristique augue dignissim volutpat. Quis
                  ultricies eu libero tortor dictumst. Molestie laoreet ut
                  aliquet feugiat a malesuada non neque. Viverra in mollis in
                  consequat hendrerit. Ut tortor risus mi magna donec. Aenean
                  eget vitae, sem convallis. Sit tempor sit eget facilisi diam
                  congue phasellus eu. Sit sed dignissim sed massa orci. Lectus
                  massa blandit maecenas dolor eget ornare. Egestas non leo et
                  duis nec diam arcu, gravida viverra.
                </p>
                <h5 className="medium font__size--14 text__14-1024 line__under mb-4">
                  See Details
                </h5>
                <div className="d-flex align-items-center my-4">
                  <div className="wrapper__select-input normal">
                    <select
                      className="select font__size--16 text__16-1024 text__16-md anton"
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
                  <div className="wrapper__select-input normal mx-4">
                    <select
                      className="select font__size--16 text__16-1024 text__16-md anton"
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
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <a
                      href="#!"
                      className="semi-bold font__size--14 text__14-1024 w-100 rounded__50 color__white btn btn__black shadow"
                    >
                      Add to Bag
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href="#!"
                      className="semi-bold font__size--14 text__14-1024 w-100 rounded__50 color__black btn btn__gray-2 shadow"
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        <img src="./../images/Heart.png" alt="" />{" "}
                        <span className="ml-2 flex-shrink-0">
                          Add to Wishlist
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <ul
              class="nav nav-pills wrapper__navtab-detail mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link bold font__size--18 text__18-1024 text__18-sm text__18-xs color__black opacity__5 hover active"
                  id="pills-description-tab"
                  data-toggle="pill"
                  href="#pills-description"
                  role="tab"
                  aria-controls="pills-description"
                  aria-selected="true"
                >
                  Description
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link bold font__size--18 text__18-1024 text__18-sm text__18-xs color__black opacity__5 hover"
                  id="pills-reviews-tab"
                  data-toggle="pill"
                  href="#pills-reviews"
                  role="tab"
                  aria-controls="pills-reviews"
                  aria-selected="false"
                >
                  Reviews (15)
                </a>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-description"
                role="tabpanel"
                aria-labelledby="pills-description-tab"
              >
                <div className="row pt-4">
                  <div className="col-lg-7">
                    <p className="font__size--14 text__14-1024 medium color__gray-1 lh-2 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      justo turpis massa tristique augue dignissim volutpat.
                      Quis ultricies eu libero tortor dictumst. Molestie laoreet
                      ut aliquet feugiat a malesuada non neque. Viverra in
                      mollis in consequat hendrerit. Ut tortor risus mi magna
                      donec. Aenean eget vitae, sem convallis. Sit tempor sit
                      eget facilisi diam congue phasellus eu. Sit sed dignissim
                      sed massa orci. Lectus massa blandit maecenas dolor eget
                      ornare. Egestas non leo et duis nec diam arcu, gravida
                      viverra.
                    </p>
                    <p className="font__size--14 text__14-1024 medium color__gray-1 lh-2 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      justo turpis massa tristique augue dignissim volutpat.
                      Quis ultricies eu libero tortor dictumst. Molestie laoreet
                      ut aliquet feugiat a malesuada non neque. Viverra in
                      mollis in consequat hendrerit. Ut tortor risus mi magna
                      donec. Aenean eget vitae, sem convallis. Sit tempor sit
                      eget facilisi diam congue phasellus eu. Sit sed dignissim
                      sed massa orci. Lectus massa blandit maecenas dolor eget
                      ornare. Egestas non leo et duis nec diam arcu, gravida
                      viverra.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-reviews"
                role="tabpanel"
                aria-labelledby="pills-reviews-tab"
              >
                <div className="row pt-4">
                  <div className="col-lg-7">
                    <div className="row mb-5">
                      <div className="col-md-7 my-auto">
                        <div className="d-flex align-items-center">
                          <h5 className="anton font__size--50 text__50-1024 text__50-sm text__50-xs mb-0">
                            5.0
                          </h5>
                          <div className="ml-2">
                            <Rating rating={5} />
                            <span className="medium font__size--14 text__14-1024 mt-2">
                              (15 Reviews)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 my-auto">
                        <a
                          href="#!"
                          className="semi-bold font__size--14 text__14-1024 w-100 rounded__50 color__black btn btn__gray-2 shadow"
                        >
                          Write a Review
                        </a>
                      </div>
                    </div>
                    <h4 className="medium font__size--14 text__14-1024 mb-3">
                      Your Rating
                    </h4>

                    <RatingForm
                      placeholderRating={0}
                      emptySymbol={
                        <img
                          src="./../images/Icon - Star.png"
                          className="icon"
                          style={{
                            width: "40px",
                            height: "40px",
                            marginRight: "15px",
                          }}
                        />
                      }
                      placeholderSymbol={
                        <img
                          src="./../images/star-red.png"
                          className="icon"
                          style={{
                            width: "40px",
                            height: "40px",
                            marginRight: "15px",
                          }}
                        />
                      }
                      fullSymbol={
                        <img
                          src="./../images/star-yellow.png"
                          className="icon"
                          style={{
                            width: "40px",
                            height: "40px",
                            marginRight: "15px",
                          }}
                        />
                      }
                    />

                    <div className="mt-4">
                      <h5 className="medium font__size--14 text__14-1024 mb-3">
                        Your Review
                      </h5>
                      <div className="input__field textarea mb-4">
                        <textarea
                          className="form-control medium font__size--12 text__12-1024 color__gray-1"
                          name=""
                          id=""
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h5 className="medium font__size--14 text__14-1024 mb-3">
                            Name
                          </h5>
                          <div className="input__field mb-4">
                            <input
                              type="text"
                              className="form-control medium font__size--12 text__12-1024 color__gray-1"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h5 className="medium font__size--14 text__14-1024 mb-3">
                            Email
                          </h5>
                          <div className="input__field mb-4">
                            <input
                              type="email"
                              className="form-control medium font__size--12 text__12-1024 color__gray-1"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <button className="semi-bold font__size--14 text__14-1024 color__white btn btn__black shadow rounded__50 btn__submit">
                          Submit
                        </button>
                      </div>
                    </div>

                    <div className="mt-5">
                      {review.map((obj) => {
                        return <CardListReview data={obj} />;
                      })}
                    </div>

                    <div className="mt-4 text-center">
                      <span className="pointer line__under medium font__size--14 text__14-1024">
                        See More Review
                      </span>
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
                Relate Products
              </h4>
            </div>

            <div className="row">
              {relate.map((obj) => {
                return (
                  <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <CardProduct data={obj} />
                  </div>
                );
              })}
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

export default DetailProduct;
