import React, { Component, Fragment } from "react";

const Rating = (props) => {
  const star = [];

  for (let index = 0; index < 5; index++) {
    if (index < props.rating) {
      star.push("./../images/dfds.png");
    } else {
      star.push("./../images/hgfh.png");
    }
  }
  return (
    <Fragment>
      <div className="wrapper__rating-star">
        {star.map((obj) => {
          return <img src={obj} alt="" />;
        })}
      </div>
    </Fragment>
  );
};

export default Rating;
