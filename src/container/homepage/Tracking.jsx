import React, { useState, Fragment } from "react";

import Footer from "../../component/footer/Footer";
import ModalLogin from "../../component/modal/Login";
import ModalRegister from "../../component/modal/Register";
import Navbar from "../../component/navbar/Navbar";
import Cart from "../../component/modal/Cart";

const Tracking = (props) => {
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

  const [searchTracking, setsearchTracking] = useState(true);

  const onClickTracking = () => {
    setsearchTracking(!searchTracking);
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

        <Navbar
          onClickCart={() => onClickCart()}
          onCLickModalLogin={() => onCLickModalLogin()}
        />

        <section className="pt-4">
          <div className="container">
            <h5 className="medium font__size--12 text__12-1024 mb-5">
              <span className="color__gray-1">Home </span>/ Order Tracking
            </h5>

            {searchTracking ? (
              <div className="row justify-content-center">
                <div className="col-md-8 col-xl-5">
                  <div className="text-center">
                    <h4 className="font__size--50 text__50-1024 text__50-sm text__50-xs anton mb-4">
                      Order Tracking
                    </h4>
                    <p className="normal font__size--14 text__14-1024 lh-1 color__gray-1 pb-3">
                      To track your order please enter your Order ID in the box
                      below and <br className="d-none d-sm-block" /> press the
                      "Track" button. This was given to you on your receipt and{" "}
                      <br className="d-none d-sm-block" /> in the confirmation
                      email you should have received.
                    </p>
                  </div>
                  <h5 className="medium font__size--14 text__14-1024 mb-3">
                    Order Tracking
                  </h5>
                  <div className="input__field mb-4">
                    <input
                      type="text"
                      className="form-control medium font__size--12 text__12-1024 color__gray-1"
                      placeholder="Username or Email Address"
                    />
                  </div>
                  <h5 className="medium font__size--14 text__14-1024 mb-4">
                    Billing Email
                  </h5>
                  <div className="input__field mb-4">
                    <input
                      type="text"
                      className="form-control medium font__size--12 text__12-1024 color__gray-1"
                      placeholder="Username or Email Address"
                    />
                  </div>
                  <button
                    onClick={() => onClickTracking()}
                    className="btn btn__black semibold font__size--14 text__14-1024 color__white shadow w-100 rounded__50 mb-4"
                  >
                    Track
                  </button>
                </div>
              </div>
            ) : (
              <div className="wrapper__search-tracking text-center">
                <div className="d-inline-block">
                  <img
                    src="./../images/Group 33067.png"
                    className="mb-3"
                    alt=""
                  />
                  <h5 className="semi-bold font__size--18 text__18-1024 text__18-sm text__18-xs color__gray-1">
                    No Data Found
                  </h5>
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

export default Tracking;
