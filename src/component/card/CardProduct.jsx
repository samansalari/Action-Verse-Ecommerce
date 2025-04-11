import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

const CardProduct = (props) => {
  return (
    <Fragment>
      <NavLink to="/detail/product" className="wrapper__Card-product color__black">
        <div className="image">
          <img src={props.data.img} alt="" />
        </div>
        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
          <h5 className="mb-0 bold font__size--16 text__16-1024 text__16-md">
            {props.data.name}
          </h5>
          <h5 className="mb-0 bold font__size--14 text__14-1024 opacity__8">
            ${props.data.price}
          </h5>
        </div>
        <p className="mb-0 medium font__size--14 text__14-1024 opacity__5">
          {props.data.type}
        </p>
      </NavLink>
    </Fragment>
  );
};

export default CardProduct;
