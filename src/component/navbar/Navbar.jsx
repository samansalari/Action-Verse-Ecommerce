import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <Fragment>
      <nav
        class="navbar navbar-expand-lg wrapper__navbar position-relative z-2"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div class="container position-relative realtive_md-none">
          <NavLink
            to="/"
            class="navbar-brand color__black position-relative anton font__size--24 text__24-1024 text__24-sm text__24-xs"
          >
            Shoppes
          </NavLink>
          <button
            class="navbar-toggler nav__button position-relative"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            class="collapse navbar-collapse wrapper__navbar-menu ml-lg-5"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav menu__center">
              <li class="nav-item d-lg-none">
                <div className="wrapper__search-form">
                  <div className="d-flex align-items-center">
                    <img src="./../images/Search.png" alt="" />
                    <input
                      type="text"
                      className="ml-2 medium font__size--14 color__black w-100"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/"
                  class="nav-link medium font__size--14 text__14-1024 color__black"
                >
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/shop"
                  class="nav-link medium font__size--14 text__14-1024 color__black"
                >
                  Shop
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/wishlist"
                  class="nav-link medium font__size--14 text__14-1024 color__black"
                >
                  Collections
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/tracking"
                  class="nav-link medium font__size--14 text__14-1024 color__black"
                >
                  Order Tracking
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/blog"
                  class="nav-link medium font__size--14 text__14-1024 color__black"
                >
                  Blogs
                </NavLink>
              </li>
              <li class="nav-item d-lg-none">
                <a
                  class="nav-link medium font__size--14 text__14-1024 color__black"
                  href="#"
                  onClick={() => props.onClickCart()}
                >
                  My Cart
                </a>
              </li>
              <li class="nav-item d-lg-none">
                <a
                  href="#!"
                  onClick={() => props.onCLickModalLogin()}
                  className="btn btn__black shadow rounded__50 w-100 color__white btn__original head semi-bold font__size--14 text__14-1024 my-3"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div
            className={
              "wrapper__nav-side d-none d-lg-flex justify-content-end align-items-center " +
              (props.status == "homepage" ? "light" : "")
            }
          >
            <div className="search d-flex align-items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.78234 1.66699C14.2573 1.66699 17.8973 5.30699 17.8973 9.78199C17.8973 11.8933 17.0871 13.8189 15.7612 15.2641L18.3702 17.8676C18.6143 18.1117 18.6152 18.5067 18.371 18.7509C18.2493 18.8742 18.0885 18.9351 17.9285 18.9351C17.7693 18.9351 17.6093 18.8742 17.4868 18.7526L14.8464 16.1195C13.4574 17.2319 11.6962 17.8978 9.78234 17.8978C5.30734 17.8978 1.6665 14.257 1.6665 9.78199C1.6665 5.30699 5.30734 1.66699 9.78234 1.66699ZM9.78234 2.91699C5.9965 2.91699 2.9165 5.99616 2.9165 9.78199C2.9165 13.5678 5.9965 16.6478 9.78234 16.6478C13.5673 16.6478 16.6473 13.5678 16.6473 9.78199C16.6473 5.99616 13.5673 2.91699 9.78234 2.91699Z"
                  fill="#100D22"
                />
              </svg>

              <input
                required
                type="text"
                className="ml-2 font__size--14 text__14-1024 medium"
                placeholder="Search"
              />
            </div>
            <div className="cart-login d-flex align-items-center">
              <div
                onClick={() => props.onCLickModalLogin()}
                className="login medium font__size--14 text__14-1024 pointer mr-3"
              >
                Log in
              </div>
              <div className="cart pointer" onClick={() => props.onClickCart()}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99985 11.1376C9.13253 11.1386 8.29167 10.839 7.62046 10.2897C6.94924 9.7404 6.48917 8.97544 6.3186 8.12506C6.305 8.03549 6.31105 7.94403 6.33631 7.85702C6.36157 7.77001 6.40544 7.68953 6.46489 7.62116C6.52435 7.55279 6.59795 7.49817 6.68061 7.46107C6.76327 7.42397 6.853 7.40529 6.9436 7.40632C7.0925 7.40415 7.23727 7.45522 7.35186 7.55032C7.46644 7.64543 7.5433 7.77832 7.5686 7.92507C7.68631 8.48689 7.99377 8.99109 8.43934 9.35299C8.88491 9.71488 9.44145 9.91242 10.0155 9.91242C10.5895 9.91242 11.146 9.71488 11.5916 9.35299C12.0372 8.99109 12.3446 8.48689 12.4624 7.92507C12.4877 7.77832 12.5645 7.64543 12.6791 7.55032C12.7937 7.45522 12.9385 7.40415 13.0874 7.40632C13.1779 7.40529 13.2677 7.42397 13.3503 7.46107C13.433 7.49817 13.5066 7.55279 13.5661 7.62116C13.6255 7.68953 13.6694 7.77001 13.6946 7.85702C13.7199 7.94403 13.7259 8.03549 13.7124 8.12506C13.5408 8.98073 13.0761 9.74976 12.3984 10.2997C11.7208 10.8495 10.8725 11.1459 9.99985 11.1376V11.1376Z"
                    fill="#100D22"
                  />
                  <path
                    d="M15.5624 19.3754H4.4374C4.18308 19.3757 3.93136 19.3243 3.69754 19.2243C3.46372 19.1242 3.25269 18.9777 3.0773 18.7935C2.90191 18.6093 2.76581 18.3914 2.67729 18.153C2.58878 17.9146 2.54969 17.6606 2.5624 17.4066L3.06865 6.63164C3.08961 6.14858 3.29636 5.69228 3.64575 5.35804C3.99513 5.02379 4.46014 4.83744 4.94366 4.83789H15.0562C15.5397 4.83744 16.0047 5.02379 16.3541 5.35804C16.7035 5.69228 16.9102 6.14858 16.9312 6.63164L17.4374 17.4066C17.4501 17.6606 17.411 17.9146 17.3225 18.153C17.234 18.3914 17.0979 18.6093 16.9225 18.7935C16.7471 18.9777 16.5361 19.1242 16.3023 19.2243C16.0685 19.3243 15.8167 19.3757 15.5624 19.3754V19.3754ZM4.94366 6.09414C4.77789 6.09414 4.61892 6.15999 4.50171 6.2772C4.3845 6.39441 4.31865 6.55338 4.31865 6.71914L3.8124 17.4691C3.80817 17.5538 3.8212 17.6385 3.8507 17.7179C3.88021 17.7974 3.92557 17.87 3.98404 17.9314C4.0425 17.9928 4.11284 18.0417 4.19078 18.075C4.26872 18.1084 4.35263 18.1255 4.4374 18.1254H15.5624C15.6472 18.1255 15.7311 18.1084 15.809 18.075C15.887 18.0417 15.9573 17.9928 16.0158 17.9314C16.0742 17.87 16.1196 17.7974 16.1491 17.7179C16.1786 17.6385 16.1916 17.5538 16.1874 17.4691L15.6812 6.69414C15.6812 6.52838 15.6153 6.36941 15.4981 6.2522C15.3809 6.13499 15.2219 6.06914 15.0562 6.06914L4.94366 6.09414Z"
                    fill="#100D22"
                  />
                  <path
                    d="M13.75 5.46875H12.5V4.375C12.5 3.71196 12.2366 3.07607 11.7678 2.60723C11.2989 2.13839 10.663 1.875 10 1.875C9.33696 1.875 8.70107 2.13839 8.23223 2.60723C7.76339 3.07607 7.5 3.71196 7.5 4.375V5.46875H6.25V4.375C6.25 3.38044 6.64509 2.42661 7.34835 1.72335C8.05161 1.02009 9.00544 0.625 10 0.625C10.9946 0.625 11.9484 1.02009 12.6517 1.72335C13.3549 2.42661 13.75 3.38044 13.75 4.375V5.46875Z"
                    fill="#100D22"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
