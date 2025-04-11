import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import ListRecentPost from "../list/ListRecentPost";

const SideBlog = (props) => {
  const [ricentPost, setRicentPost] = useState([
    "./../images/sdsad.png",
    "./../images/fgdf.png",
    "./../images/jhhgj.png",
    "./../images/yttu.png",
  ]);
  return (
    <Fragment>
      <h5 className="semi-bodl font__size--14 text__14-1024 mb-3">Search</h5>
      <div className="wrapper__subscribe-footer justify-content-between d-flex align-items-center mb-4">
        <input
          type="text"
          placeholder="Title..."
          className="emdium font__size--12 text__12-1024 color__gray-1"
        />
        <button className="medium button__sub font__size--12 text__12-1024 btn btn__black shadow color__white">
          Search
        </button>
      </div>

      <hr className="mt-4" />

      <h5 className="semi-bodl font__size--14 text__14-1024 mb-3">Category</h5>
      <div className="list__category medium font__size--14 text__14-1024">
        <div>Sport</div>
        <div>Lifestyle</div>
        <div>Design</div>
        <div>Promo</div>
        <div>Modern</div>
        <div>Brand</div>
      </div>

      <hr className="mt-4" />

      <h5 className="semi-bodl font__size--14 text__14-1024 mb-3">
        Recent Post
      </h5>
      {ricentPost.map((obj) => {
        return <ListRecentPost image={obj} />;
      })}

      <hr className="mt-4" />

      <h5 className="semi-bodl font__size--14 text__14-1024 mb-3">
        Popular Post
      </h5>

      <div className="mb-3">
        <NavLink to="/detail/blog" className="normal font__size--14 text__14-1024 mb-2 color__black">
          Velit officia consequat duis enim velit mollit.
        </NavLink>
        <p className="mb-0 medium font__size--12 text__12-1024 color__gray-1">
          8/2/19
        </p>
      </div>
      <div className="mb-3">
        <NavLink to="/detail/blog" className="normal font__size--14 text__14-1024 mb-2 color__black">
          Velit officia consequat duis enim velit mollit.
        </NavLink>
        <p className="mb-0 medium font__size--12 text__12-1024 color__gray-1">
          8/2/19
        </p>
      </div>
      <div className="mb-3">
        <NavLink to="/detail/blog" className="normal font__size--14 text__14-1024 mb-2 color__black">
          Velit officia consequat duis enim velit mollit.
        </NavLink>
        <p className="mb-0 medium font__size--12 text__12-1024 color__gray-1">
          8/2/19
        </p>
      </div>

      <hr className="mt-4" />

      <h5 className="semi-bodl font__size--14 text__14-1024 mb-3">
        Popular Author
      </h5>

      <div className="list__author-popular d-flex align-items mb-3">
        <img src="./../images/sdsdd.png" className="img" alt="" />
        <div className="ml-2">
          <h5 className="normal font__size--14 text__14-1024 mb-0">
            Ralph Edwards
          </h5>
          <p className="mb-0 medium font__size--12 text__12-1024 color__gray-1">
            29 Articles
          </p>
        </div>
      </div>

      <div className="list__author-popular d-flex align-items mb-3">
        <img src="./../images/sdsdd.png" className="img" alt="" />
        <div className="ml-2">
          <h5 className="normal font__size--14 text__14-1024 mb-0">
            Ralph Edwards
          </h5>
          <p className="mb-0 medium font__size--12 text__12-1024 color__gray-1">
            29 Articles
          </p>
        </div>
      </div>

      <div className="list__author-popular d-flex align-items mb-3">
        <img src="./../images/sdsdd.png" className="img" alt="" />
        <div className="ml-2">
          <h5 className="normal font__size--14 text__14-1024 mb-0">
            Ralph Edwards
          </h5>
          <p className="mb-0 medium font__size--12 text__12-1024 color__gray-1">
            29 Articles
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default SideBlog;
