import React, { useState, Fragment } from "react";

import Footer from "../../component/footer/Footer";
import ModalLogin from "../../component/modal/Login";
import ModalRegister from "../../component/modal/Register";
import Navbar from "../../component/navbar/Navbar";
import Cart from "../../component/modal/Cart";

const Wishlist = (props) => {
  const [modalLogin, setModalLogin] = useState(false);
  const onCLickModalLogin = () => {
    if (!modalLogin) {
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

  const [wishlist, setWishlist] = useState(true);

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
            <h5 className="medium font__size--12 text__12-1024 text__12-1024 mb-5">
              <span className="color__gray-1">Home </span>/ Wishlist
            </h5>
            <div className="text-center">
              <h4 className="font__size--50 text__50-1024 text__50-sm text__50-xs anton mb-4">
                Wishlist
              </h4>
            </div>

            <div className="mb-5">
              <div className="wrapper__wishlish-tabel">
                <div className="head mb-4">
                  <div className="row font__size--14 text__14-1024 bold">
                    <div className="col-xl-2 col-lg-1 col-md-2">
                      Select All (2)
                    </div>
                    <div className="col-lg-3 col-sm-4 d-none d-md-block">
                      Product Name
                    </div>
                    <div className="col-xl-1 col-sm-2 d-none d-md-block">
                      Unit Price
                    </div>
                    <div className="col-xl-5 col-sm-3 d-none d-md-block">
                      Stock Status
                    </div>
                  </div>
                </div>
                {wishlist ? (
                  <div className="content">
                    <div className="row item font__size--14 text__14-1024 bold mb-4">
                      <div className="my-auto col-xl-2 col-lg-1 col-md-2 col-2">
                        <label class="wrapper__checkbox-table position-relative medium font__size--12 text__12-1024 color__gray-1 d-flex align-items-center">
                          <input type="checkbox" className="select" />
                          <span class="checkmark mb-0 mr-3">
                            <div className="box"></div>
                          </span>
                        </label>
                      </div>
                      <div className="my-auto col-lg-3 col-md-4 col">
                        <div className="wrapper__tabel-box d-flex align-items-center">
                          <img
                            src="./../images/dsadas.png"
                            className="img"
                            alt=""
                          />
                          <div className="ml-4 w-100">
                            <h5 className="normal font__size--16 text__16-1024 text__16-md">
                              Nike Air Max 2021
                            </h5>
                            <p className="mb-0 normal font__size--16 text__16-1024 text__16-md color__gray-1">
                              Men's Shoes
                            </p>
                            <div className="d-md-none font__size--16 text__16-1024 text__16-md">
                              $213
                            </div>
                            <div className="text-right d-md-none">
                              <div className="wrapper__stock in d-inline-block font__size--16 text__16-1024 text__16-md">
                                In Stock
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="my-auto col-xl-1 d-none d-md-block col-sm-2">
                        <div>$213</div>
                      </div>
                      <div className="col-md col-12 my-auto">
                        <div className="row justify-content-center mt-4 mt-md-0">
                          <div className="col-lg-4 col-md-12 d-none d-md-block mb-4 my-lg-auto">
                            <div className="wrapper__stock in">In Stock</div>
                          </div>
                          <div className="col-lg-6 col-md-9 col-8 mb-3 my-md-auto">
                            <a
                              href="#!"
                              className="semi-bold font__size--14 text__14-1024 btn btn__outlined--black no__opacity rounded__50 shadow btn__add-bag"
                            >
                              Add to Bag
                            </a>
                          </div>
                          <div className="col-lg-2 col-md-3 col-8 my-auto">
                            <img
                              className="pointer d-md-block d-none"
                              src="./../images/Delete.png"
                              alt=""
                            />

                            <a
                              href="#!"
                              className="semi-bold font__size--14 text__14-1024 btn btn__outlined--red no__opacity rounded__50 shadow btn__add-bag d-md-none"
                            >
                              Remove
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row item font__size--14 text__14-1024 bold mb-4">
                      <div className="my-auto col-xl-2 col-lg-1 col-md-2 col-2">
                        <label class="wrapper__checkbox-table position-relative medium font__size--12 text__12-1024 color__gray-1 d-flex align-items-center">
                          <input type="checkbox" className="select" />
                          <span class="checkmark mb-0 mr-3">
                            <div className="box"></div>
                          </span>
                        </label>
                      </div>
                      <div className="my-auto col-lg-3 col-md-4 col">
                        <div className="wrapper__tabel-box d-flex align-items-center">
                          <img
                            src="./../images/dsadas.png"
                            className="img"
                            alt=""
                          />
                          <div className="ml-4 w-100">
                            <h5 className="normal font__size--16 text__16-1024 text__16-md">
                              Nike Air Max 2021
                            </h5>
                            <p className="mb-0 normal font__size--16 text__16-1024 text__16-md color__gray-1">
                              Men's Shoes
                            </p>
                            <div className="d-md-none font__size--16 text__16-1024 text__16-md">
                              $213
                            </div>
                            <div className="text-right d-md-none">
                              <div className="wrapper__stock in d-inline-block font__size--16 text__16-1024 text__16-md">
                                In Stock
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="my-auto col-xl-1 d-none d-md-block col-sm-2">
                        <div>$213</div>
                      </div>
                      <div className="col-md col-12 my-auto">
                        <div className="row justify-content-center mt-4 mt-md-0">
                          <div className="col-lg-4 col-md-12 d-none d-md-block mb-4 my-lg-auto">
                            <div className="wrapper__stock in">In Stock</div>
                          </div>
                          <div className="col-lg-6 col-md-9 col-8 mb-3 my-md-auto">
                            <a
                              href="#!"
                              className="semi-bold font__size--14 text__14-1024 btn btn__outlined--black no__opacity rounded__50 shadow btn__add-bag"
                            >
                              Add to Bag
                            </a>
                          </div>
                          <div className="col-lg-2 col-md-3 col-8 my-auto">
                            <img
                              className="pointer d-md-block d-none"
                              src="./../images/Delete.png"
                              alt=""
                            />

                            <a
                              href="#!"
                              className="semi-bold font__size--14 text__14-1024 btn btn__outlined--red no__opacity rounded__50 shadow btn__add-bag d-md-none"
                            >
                              Remove
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            {wishlist ? (
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <div className="text-center">
                    <a
                      href="#!"
                      className="semi-bold w-100 mb-4 font__size--14 text__14-1024 btn btn__outlined--black no__opacity rounded__50 shadow"
                    >
                      Add All to Bag
                    </a>
                    <a
                      href="#!"
                      className="semi-bold w-100 font__size--14 text__14-1024 btn btn__gray-2 color__black rounded__50 shadow"
                    >
                      Add Selected to Cart
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="wrapper__search-tracking text-center">
                <div className="d-inline-block">
                  <img
                    src="./../images/Group 33068.png"
                    className="mb-3"
                    alt=""
                  />
                  <h5 className="semi-bold font__size--18 color__gray-1 mb-4">
                    No Data Found
                  </h5>
                  <a
                    href="#!"
                    className="semi-bold w-100 font__size--14 text__14-1024 btn btn__black rounded__50 shadow"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            )}
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

export default Wishlist;
