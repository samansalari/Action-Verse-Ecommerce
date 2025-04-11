import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const ListRecentPost = (props) => {
  return (
    <Fragment>
      <div className="wrapper__list-ricent d-flex align-items-center mb-3">
        <img src={props.image} className="img" alt="" />
        <div className="ml-3">
          <NavLink to="/detail/blog" className="normal font__size--14 text__14-1024 mb-2 color__black">
            Velit officia consequat duis enim velit mollit.
          </NavLink>
          <p className="mb-0 medium font__size--12 text__12-1024 color__gray-1">
            8/2/19
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default ListRecentPost;
