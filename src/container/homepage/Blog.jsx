import React, { useState, Fragment } from "react";
import Footer from "../../component/footer/Footer";
import ModalLogin from "../../component/modal/Login";
import ModalRegister from "../../component/modal/Register";
import Navbar from "../../component/navbar/Navbar";
import Cart from "../../component/modal/Cart";
import CardBlog from "../../component/card/CardBlog";
import SideBlog from "../../component/other/SideBlog";

const Blog = (props) => {
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

  const [blogPost, setBlogPost] = useState([
    "./../images/Image (1c).png",
    "./../images/Image (2c).png",
    "./../images/Image (3c).png",
    "./../images/Image (1c).png",
    "./../images/Image (2c).png",
    "./../images/Image (3c).png",
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
              <span className="color__gray-1">Home /</span> Blog
            </h5>
            <div className="row">
              <div className="col-lg-8 mb-4 mb-lg-0">
                <div className="row mb-5">
                  {blogPost.map((obj) => {
                    return (
                      <div className="col-md-6 mb-4">
                        <CardBlog image={obj} />
                      </div>
                    );
                  })}
                </div>
                <nav
                  aria-label="Page navigation example"
                  className="medium font__size--14 text__14-1024 wrapper__pagiantion"
                >
                  <ul className="pagination justify-content-center justify-content-lg-start">
                    <li className="page-item">
                      <a className="page-link active" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                  </ul>
                </nav>
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

export default Blog;
