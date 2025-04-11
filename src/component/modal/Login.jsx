import React, { useState, Fragment } from "react";

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Fragment>
      <div
        class={
          "wrapper__modal-wrap modal fade " + (props.modalLogin ? "show" : "")
        }
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="bg__wrap"
          onClick={() => props.onCLickModalLogin()}
        ></div>
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content position-relative">
            <h3 className="anton font__size--40 text__40-1024 text__40-md text__40-mm text-center mb-4">
              Login
            </h3>

            <img
              src="./../images/close 1.png"
              className="pointer wrapper__close-modal"
              onClick={() => props.onCLickModalLogin()}
              alt=""
            />

            <h5 className="medium font__size--14 text__14-1024 mb-3">
              Username
            </h5>
            <div className="input__field mb-4">
              <input
                type="text"
                className="form-control medium font__size--12 text__12-1024 color__gray-1"
                placeholder="Username or Email Address"
              />
            </div>

            <h5 className="medium font__size--14 text__14-1024 mb-3">
              Password
            </h5>
            <div className="input__field mb-4">
              <img
                src="./../images/Show.png"
                onClick={() => setShowPassword(!showPassword)}
                className="pointer icon"
                alt=""
              />
              <input
                type={showPassword ? "text" : "password"}
                className="form-control medium font__size--12 text__12-1024 color__gray-1"
                placeholder="Password"
              />
            </div>

            <div className="d-flex justify-content-between mb-4">
              <label class="wrapper__checkbox position-relative medium font__size--12 text__12-1024 color__gray-1 d-flex align-items-center">
                <input type="checkbox" className="select" />
                <span class="checkmark mb-0 mr-3">
                  <div className="box"></div>
                </span>
                Remember me
              </label>

              <a
                href="#!"
                className="medium font__size--12 text__12-1024 color__black line__under d-inline-block"
              >
                Forgot Password
              </a>
            </div>

            <button className="btn btn__black semibold font__size--14 text__14-1024 color__white shadow w-100 rounded__50 mb-4">
              Login
            </button>

            <div className="text-center medium font__size--12 text__12-1024 color__gray-1">
              Not a member?{" "}
              <a
                href="#!"
                className="color__black pointer"
                onClick={(e) => props.onCLickSwitchModal("register")}
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
