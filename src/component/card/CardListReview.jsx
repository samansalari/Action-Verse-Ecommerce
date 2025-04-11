import React, { Component, Fragment } from "react";
import Rating from "../other/Rating";

const CardListReview = (props) => {
  return (
    <Fragment>
      <div className="wrapper__list-review">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="profile d-flex align-items-center justify-content-between">
            <img src={props.data.profile} className="img" alt="" />
            <div className="ml-3">
              <h5 className="medium font__size--14 text__14-1024 mb-0">
                {props.data.name}
              </h5>
              <p className="mb-0 medium font__size--12 text__12-1024 color__gray-1">
                {props.data.date}
              </p>
            </div>
          </div>
          <Rating rating={props.data.rating} />
        </div>
        <p className="font__size--14 text__14-1024 normal lh-2">
          {props.data.description}
        </p>
        <div className="list__images mt-4">
          {props.data.images.length >= 1
            ? props.data.images.map((obj) => {
                console.log(obj);
                return <img src={obj} alt="" />;
              })
            : ""}
        </div>
      </div>
    </Fragment>
  );
};

export default CardListReview;
