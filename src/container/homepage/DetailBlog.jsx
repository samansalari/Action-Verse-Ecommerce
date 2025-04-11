import React, { useState, Fragment } from "react";
import Footer from "../../component/footer/Footer";
import ModalLogin from "../../component/modal/Login";
import ModalRegister from "../../component/modal/Register";
import Navbar from "../../component/navbar/Navbar";
import Cart from "../../component/modal/Cart";
import SideBlog from "../../component/other/SideBlog";
import CardListComment from "../../component/card/CardListComment";

const DetailBlog = (props) => {
  const [modalLogin, setModalLogin] = useState(false);
  const onCLickModalLogin = () => {
    console.log(!modalLogin);
    if (!modalLogin) {
      console.log("add");
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setModalLogin(!modalLogin);
  };

  const [modalRegister, setModalRegister] = useState(false);
  const onCLickModalRegister = () => {
    if (!modalRegister) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setModalRegister(!modalRegister);
  };

  const onCLickSwitchModal = async (e) => {
    if (e == "login") {
      setModalRegister(!modalRegister);
      const timeout = await setTimeout(() => {
        setModalLogin(!modalLogin);
      }, 1000);
      return () => clearInterval(timeout);
    }
    if (e == "register") {
      console.log("masuk");
      setModalLogin(!modalLogin);
      const timeout = await setTimeout(() => {
        setModalRegister(!modalRegister);
        console.log("delay");
      }, 1000);
      console.log("selesai");
      return () => clearInterval(timeout);
    }
  };

  const [cart, setCart] = useState(false);

  const onClickCart = () => {
    setCart(!cart);
  };

  const [comment, setComment] = useState([
    {
      name: "Kristin Watson",
      date: "8/2/19",
      profile: "./../images/Imagesas.png",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
    },
    {
      name: "Kristin Watson",
      date: "8/2/19",
      profile: "./../images/Imagesas.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
    },
  ]);

  return (
    <Fragment>
      <div className="overflow-hidden ">
        <ModalLogin
          modalLogin={modalLogin}
          onCLickModalLogin={() => onCLickModalLogin()}
          onCLickSwitchModal={(e) => onCLickSwitchModal(e)}
        />

        <ModalRegister
          modalRegister={modalRegister}
          onCLickModalRegister={() => onCLickModalRegister()}
          onCLickSwitchModal={(e) => onCLickSwitchModal(e)}
        />

        <Cart onClickCart={() => onClickCart()} cart={cart} />

        <Navbar
          onClickCart={() => onClickCart()}
          onCLickModalLogin={() => onCLickModalLogin()}
        />

        <section className="pt-4">
          <div className="container">
            <h5 className="medium font__size--12 text__12-1024 mb-5">
              <span className="color__gray-1">Home / Blog / </span>Detail
            </h5>
            <div className="row">
              <div className="col-lg-8 mb-4 mb-lg-0">
                <img
                  src="./../images/gfghf.png"
                  className="images__detail-1"
                  alt=""
                />
                <div className="my-3 medium font__size--14 text__14-1024 color__gray-1">
                  <span className="font-italic">Sport, Lifestyle</span>
                  <span className="mx-2">|</span>
                  <span className="font__size--12 text__12-1024">
                    Date: 8/2/19
                  </span>
                </div>
                <h4 className="extra-bold font__size--24 text__24-1024 text__24-sm text__24-xs mb-3">
                  Lorem ipsum dolor sit amet
                </h4>
                <div className="d-flex align-items-center mb-4">
                  <img
                    src="./../images/fdgfdg.png"
                    className="images__detail-profile"
                    alt=""
                  />
                  <span className="medium font__size--14 text__14-1024 ml-3">
                    Robert Fox
                  </span>
                </div>

                <p className="normal font__size--14 text__14-1024 lh-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tortor pellentesque et nibh tincidunt bibendum. Sed in tellus
                  in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi,
                  sed sed pellentesque posuere orci sit sed. Gravida facilisis
                  sollicitudin donec vitae quam ut nibh enim. Enim semper nulla
                  quis est. Est scelerisque malesuada maecenas augue elementum
                  integer. Sollicitudin augue in libero eu neque augue diam
                  lectus laoreet. Viverra amet, in massa integer tincidunt
                  ullamcorper. Accumsan massa consequat amet cursus condimentum
                  consectetur. Enim sem cursus viverra at imperdiet.
                </p>

                <div className="wrapper__blog-quote medium font__size--16 text__16-1024 text__16-md font-italic mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tortor pellentesque et nibh tincidunt bibendum. Sed in tellus
                  in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi,
                  sed sed pellentesque posuere orci sit sed. Gravida facilisis
                  sollicitudin donec vitae quam ut nibh enim.
                </div>

                <p className="normal font__size--14 text__14-1024 lh-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tortor pellentesque et nibh tincidunt bibendum. Sed in tellus
                  in feugiat dui et enim. Odio feugiat id donec ultricies.
                </p>

                <div className="row mb-4">
                  <div className="col-md-4">
                    <img
                      src="./../images/ghgf.png"
                      className="images__detail-grid"
                      alt=""
                    />
                  </div>
                  <div className="col-md-4">
                    <img
                      src="./../images/fgfgdfg.png"
                      className="images__detail-grid"
                      alt=""
                    />
                  </div>
                  <div className="col-md-4">
                    <img
                      src="./../images/fgdff.png"
                      className="images__detail-grid"
                      alt=""
                    />
                  </div>
                </div>

                <div className="wrapper__share-blog d-flex align-items-center justify-content-center mb-5">
                  <h5 className="semi-bold font__size--18 text__18-1024 text__18-sm text__18-xs">
                    Share
                  </h5>
                  <ul className="list__share">
                    <li>
                      <a href="#!">
                        <img src="./../images/1Icon - Facebook.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img src="./../images/1Icon - Ig.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img src="./../images/1Icon - Wa.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>

                <h4 className="bold font__size--18 text__18-1024 text__18-sm text__18-xs">
                  Comment (1)
                </h4>
                <hr className="my-4" />

                <div className="mt-5 mb-5">
                  {comment.map((obj) => {
                    return <CardListComment data={obj} />;
                  })}
                </div>

                <h5 className="semi-bold font__size--18 text__18-1024 text__18-sm text__18-xs text-center mb-4">
                  Leave a Reply
                </h5>
                <div className="input__field textarea mb-4">
                  <textarea
                    className="form-control medium font__size--12 text__12-1024 color__gray-1"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="medium font__size--14 text__14-1024 mb-3">
                      Name
                    </h5>
                    <div className="input__field mb-4">
                      <input
                        type="text"
                        className="form-control medium font__size--12 text__12-1024 color__gray-1"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h5 className="medium font__size--14 text__14-1024 mb-3">
                      Email
                    </h5>
                    <div className="input__field mb-4">
                      <input
                        type="email"
                        className="form-control medium font__size--12 text__12-1024 color__gray-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button className="semi-bold font__size--14 text__14-1024 color__white btn btn__black shadow rounded__50 btn__submit">
                    Post Comment
                  </button>
                </div>
              </div>
              <div className="col-lg-4">
                <SideBlog />
              </div>
            </div>
          </div>
        </section>

        <Footer
          onClickCart={() => onClickCart()}
          onCLickModalLogin={() => onCLickModalLogin()}
          onCLickModalRegister={() => onCLickModalRegister()}
        />
      </div>
    </Fragment>
  );
};

export default DetailBlog;
