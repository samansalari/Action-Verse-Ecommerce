import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <Fragment>
      <section className="py-0">
        <div className="container line__footer">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <h4 className="anton font__size--24 text__24-1024 text__24-sm text__24-xs mb-4">
                Shoppes
              </h4>
              <h5 className="medium font__size--14 text__14-1024">Address</h5>
              <p className="medium font__size--14 text__14-1024 color__gray-1 mb-3">
                2118 Thornridge Cir. Syracuse, Connecticut 35624
              </p>
              <h5 className="medium font__size--14 text__14-1024">Email</h5>
              <p className="medium font__size--14 text__14-1024 color__gray-1 mb-3">
                Shoppes@example.com
              </p>
              <h5 className="medium font__size--14 text__14-1024">
                Phone Number
              </h5>
              <p className="medium font__size--14 text__14-1024 color__gray-1 mb-3">
                +321 4356 2212
              </p>
            </div>
            <div className="col-6 col-lg-2 mb-4 mb-lg-0">
              <h5 className="medium font__size--14 text__14-1024 mb-3">Menu</h5>
              <ul className="list__menu-footer font__size--14 text__14-1024 medium">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                  <NavLink to="/wishlist">Wishlist</NavLink>
                </li>
                <li>
                  <NavLink to="/tracking">Order Tracking</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blogs</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-4 mb-lg-0">
              <h5 className="medium font__size--14 text__14-1024 mb-3">
                Quick Links
              </h5>

              <ul className="list__menu-footer font__size--14 text__14-1024 medium">
                <li>
                  <a href="#!" onClick={() => props.onCLickModalLogin()}>
                    Login
                  </a>
                </li>
                <li>
                  <a href="#!" onClick={() => props.onCLickModalRegister()}>
                    Register
                  </a>
                </li>
                <li>
                  <a href="#!" onClick={() => props.onClickCart()}>
                    My Cart
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <h5 className="medium font__size--14 text__14-1024 mb-3">
                Let’s Stay in Touch
              </h5>
              <div className="wrapper__subscribe-footer justify-content-between d-flex align-items-center mb-4">
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  className="emdium font__size--12 text__12-1024 color__gray-1"
                />
                <button className="medium button__sub font__size--12 text__12-1024 btn btn__black shadow color__white">
                  Subscribe
                </button>
              </div>

              <h5 className="medium font__size--14 text__14-1024 mb-3">
                Follow our Social
              </h5>

              <ul className="list__sosmed-footer">
                <li>
                  <a href="#!">
                    <img src="./../images/Icon - Facebook.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="./../images/Icon - Ig.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="./../images/Icon - Wa.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="py-4 text-center medium font__size--14 text__14-1024 color__gray-1">
        Copyright Shoppes 2022 All Right Reserved
      </div>
    </Fragment>
  );
};

export default Footer;
