import React, { useState, Fragment } from "react";

const Register = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Fragment>
      <div
        class={
          "wrapper__modal-wrap modal fade " +
          (props.modalRegister ? "show" : "")
        }
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="bg__wrap"
          onClick={() => props.onCLickModalRegister()}
        ></div>
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content position-relative">
            <h3 className="anton font__size--40 text__40-1024 text__40-md text__40-mm text-center mb-4">
              Register
            </h3>

            <img
              src="./../images/close 1.png"
              className="pointer wrapper__close-modal"
              onClick={() => props.onCLickModalRegister()}
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
              Username
            </h5>
            <div className="input__field mb-4">
              <input
                type="text"
                className="form-control medium font__size--12 text__12-1024 color__gray-1"
                placeholder="Username"
              />
            </div>
            <h5 className="medium font__size--14 text__14-1024 mb-3">Email</h5>
            <div className="input__field mb-4">
              <input
                type="text"
                className="form-control medium font__size--12 text__12-1024 color__gray-1"
                placeholder="Email Address"
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

            <div className=" mb-4">
              <label class="wrapper__checkbox position-relative medium font__size--12 text__12-1024 color__gray-1 d-flex align-items-center">
                <input type="checkbox" className="select" />
                <span class="checkmark mb-0 mr-3">
                  <div className="box"></div>
                </span>
                I read and agree{" "}
                <a href="#!" className="line__under color__black ml-2">
                  Term & Conditions
                </a>
              </label>
            </div>

            <button className="btn btn__black semibold font__size--14 text__14-1024 color__white shadow w-100 rounded__50 mb-4">
              Register
            </button>

            <div className="text-center medium font__size--12 text__12-1024 color__gray-1">
              Already have an account?{" "}
              <a
                href="#!"
                className="color__black pointer"
                onClick={(e) => props.onCLickSwitchModal("login")}
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
