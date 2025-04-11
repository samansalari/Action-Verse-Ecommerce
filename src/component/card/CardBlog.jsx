import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const CardBlog = (props) => {
  return (
    <Fragment>
      <div className="wrapper__card-blog">
        <img src={props.image} className="mb-3 img" alt="" />
        <p className="medium font__size--14 text__14-1024 color__gray-1 font-italic mb-3">
          Sport, Design, Lifestyle
        </p>
        <NavLink to="/detail/blog" className="bold font__size--16 text__16-1024 text__16-md color__black">Lorem ipsum dolor sit amet</NavLink>
        <p className="medium font__size--14 text__14-1024 font-italic color__gray-1 mb-3">
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </p>
        <div className="d-flex align-items-center profile">
          <img src="./../images/Image (4c).png" className="img" alt="" />
          <div className="ml-3">
            <h5 className="font__size--14 text__14-1024 medium mb-0">Cameron Williamson</h5>
            <p className="mb-0 medium font__size--12 color__gray-1">8/2/19</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardBlog;
