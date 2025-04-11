import React, { useState, Fragment } from "react";

const Cart = (props) => {
  const [status, setStatus] = useState(false);
  return (
    <Fragment>
      <div className={"wrapper__sidebar-cart " + (props.cart ? "active" : "")}>
        <div className="wrap__all d-flex flex-wrap align-content-between h-100">
          <div className="w-100">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="mb-0">Shopping Cart</h5>
              <img
                src="./../images/close 1.png"
                className="pointer"
                onClick={() => props.onClickCart()}
                alt=""
              />
            </div>
            {status ? (
              <Fragment>
                {" "}
                <div className="wrapper__list-product">
                  <div className="position-relative d-flex align-items-center">
                    <img
                      src="./../images/fgfdgf.png"
                      className="preview"
                      alt=""
                    />
                    <div className="ml-3">
                      <h5 className="bold font__size--16 text__16-1024 text__16-md">
                        Nike Air Max 2021
                      </h5>
                      <p className="font__size--16 text__16-1024 text__16-md anton mb-0">
                        <span className="opacity__5">QNT:</span> 1
                      </p>
                      <p className="font__size--14 text__14-1024 bold mb-0">
                        $213
                      </p>
                    </div>

                    <div className="icon__close pointer">
                      <img src="./../images/gfdgfg.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="wrapper__list-product">
                  <div className="position-relative d-flex align-items-center">
                    <img
                      src="./../images/fgfdgf.png"
                      className="preview"
                      alt=""
                    />
                    <div className="ml-3">
                      <h5 className="bold font__size--16 text__16-1024 text__16-md">
                        Nike Air Max 2021
                      </h5>
                      <p className="font__size--16 text__16-1024 text__16-md anton mb-0">
                        <span className="opacity__5">QNT:</span> 1
                      </p>
                      <p className="font__size--14 text__14-1024 bold mb-0">
                        $213
                      </p>
                    </div>

                    <div className="icon__close pointer">
                      <img src="./../images/gfdgfg.png" alt="" />
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              ""
            )}
          </div>
          {status ? (
            <div className="w-100">
              <div className="d-flex justify-content-between mb-4">
                <h5 className="mb-0 extra-bold font__size--24 text__24-1024 text__24-sm text__24-xs">
                  Subtotal
                </h5>
                <h5 className="mb-0 extra-bold font__size--24 text__24-1024 text__24-sm text__24-xs">
                  $954
                </h5>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <a
                    href="#!"
                    className="semi-bold font__size--14 text__14-1024 rounded__50 color__white btn btn__black shadow w-100"
                  >
                    Checkout
                  </a>
                </div>
                <div className="col-md-6">
                  <a
                    href="#!"
                    className="semi-bold font__size--14 text__14-1024 rounded__50 color__black btn btn__gray-2 shadow w-100"
                  >
                    View Cart
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="wrapper__search-tracking cart text-center">
              <div className="d-inline-block">
                <img
                  src="./../images/Group 33068.png"
                  className="mb-3"
                  alt=""
                />
                <h5 className="semi-bold mb-4 font__size--18 text__18-1024 text__18-sm text__18-xs color__gray-1">
                  No Data Found
                </h5>

                <a
                  href="#!"
                  className="btn btn__black shadow rounded__50 color__white btn__original semi-bold font__size--14 text__14-1024"
                >
                  Shop Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg__cart"></div>
    </Fragment>
  );
};

export default Cart;
