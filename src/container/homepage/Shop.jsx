import React, { useState, Fragment } from "react";
import { Range, getTrackBackground } from "react-range";

import Footer from "../../component/footer/Footer";
import ModalLogin from "../../component/modal/Login";
import ModalRegister from "../../component/modal/Register";
import Navbar from "../../component/navbar/Navbar";
import Cart from "../../component/modal/Cart";
import CardProduct from "../../component/card/CardProduct";

const Shop = (props) => {
  const [modalLogin, setModalLogin] = useState(false);
  const onCLickModalLogin = () => {
    if (!modalLogin) {
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

  const STEP = 0.1;
  const MIN = 0;
  const MAX = 2000;
  const rtl = false;

  const [values, setValues] = useState([0, 2000]);

  const colorList = [
    {
      color: "#100D22",
      name: "Black",
    },
    {
      color: "#808080",
      name: "Gray",
    },
    {
      color: "#D96D6D",
      name: "Soft Pink",
    },
    {
      color: "#BA4164",
      name: "Red",
    },
    {
      color: "#56A1AD",
      name: "Tosca",
    },
    {
      color: "#5848CA",
      name: "Purple",
    },
    {
      color: "#F6F6F6",
      name: "Soft Gray",
    },
    {
      color: "#A8BD84",
      name: "Green",
    },
  ];

  const [productList, setProductList] = useState([
    {
      img: "./../images/dsadas.png",
      name: "Nike Air Max 2021",
      price: "213",
      type: "Men's Shoes",
    },
    {
      img: "./../images/Bg (1).png",
      name: "Nike Air Max 2021",
      price: "213",
      type: "Men's Shoes",
    },
    {
      img: "./../images/Bg (2).png",
      name: "Nike Air Max 2021",
      price: "213",
      type: "Men's Shoes",
    },
    {
      img: "./../images/Bg (3).png",
      name: "Nike Air Max 2021",
      price: "213",
      type: "Men's Shoes",
    },
    {
      img: "./../images/dsadas.png",
      name: "Nike Air Max 2021",
      price: "213",
      type: "Men's Shoes",
    },
    {
      img: "./../images/Bg (1).png",
      name: "Nike Air Max 2021",
      price: "213",
      type: "Men's Shoes",
    },
    {
      img: "./../images/Bg (2).png",
      name: "Nike Air Max 2021",
      price: "213",
      type: "Men's Shoes",
    },
    {
      img: "./../images/Bg (3).png",
      name: "Nike Air Max 2021",
      price: "213",
      type: "Men's Shoes",
    },
    {
      img: "./../images/Bg (3).png",
      name: "Nike Air Max 2021",
      price: "213",
      type: "Men's Shoes",
    },
  ]);

  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");

  const onClickCategory = (e) => {
    if (e == category) {
      setCategory("");
    } else {
      setCategory(e);
    }
  };

  const onClickColor = (e) => {
    if (e == category) {
      setColor("");
    } else {
      setColor(e);
    }
  };

  const onRemove = (e) => {
    if (e == "category") {
      setCategory("");
    }
    if (e == "color") {
      setColor("");
    }
    if (e == "price") {
      setValues([0, 2000]);
    }
  };

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
            <h5 className="medium font__size--12 text__12-1024 text__12-1024 mb-5">
              <span className="color__gray-1">Home / Shop / </span>All Products
            </h5>
            <div className="row">
              <div className="col-md-3">
                <h4 className="extra-bold font__size--24 text__24-1024 text__24-sm text__24-xs mb-4 d-none d-md-block">
                  All Products (531)
                </h4>

                <h5 className="semi-bold font__size--14 text__14-1024 mb-3 d-none d-md-block">
                  Categories
                </h5>

                <ul className="list__category-items normal font__size--14 text__14-1024">
                  <li
                    className="pointer"
                    onClick={() => onClickCategory("Shoes (321)")}
                  >
                    Shoes (321)
                  </li>
                  <li
                    className="pointer"
                    onClick={() => onClickCategory("Clothing (75)")}
                  >
                    Clothing (75)
                  </li>
                  <li
                    className="pointer"
                    onClick={() => onClickCategory("Accessoris (135)")}
                  >
                    Accessoris (135)
                  </li>
                </ul>

                <hr className="mt-md-4 my-4" />

                <h5 className="semi-bold font__size--14 text__14-1024 mb-3  d-none d-md-block">
                  Price
                </h5>

                <div className="wrapper__range-price normal font__size--14 text__14-1024 d-md-flex align-items-center justify-content-between mb-3  d-none">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="$0"
                    value={Math.round(values[0])}
                  />
                  <span className="mx-2">-</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="$2000"
                    value={Math.round(values[1])}
                  />
                </div>

                <div
                  className="px-2  d-none d-md-flex"
                  style={{
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Range
                    values={values}
                    step={STEP}
                    min={MIN}
                    max={MAX}
                    rtl={rtl}
                    onChange={(values) => {
                      setValues(values);
                    }}
                    renderTrack={({ props, children }) => (
                      <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                          ...props.style,
                          height: "36px",
                          display: "flex",
                          width: "100%",
                        }}
                      >
                        <div
                          ref={props.ref}
                          style={{
                            height: "5px",
                            width: "100%",
                            borderRadius: "4px",
                            background: getTrackBackground({
                              values,
                              colors: ["#878690", "#100D22", "#878690"],
                              min: MIN,
                              max: MAX,
                              rtl,
                            }),
                            alignSelf: "center",
                          }}
                        >
                          {children}
                        </div>
                      </div>
                    )}
                    renderThumb={({ props, isDragged }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          height: "18px",
                          width: "18px",
                          borderRadius: "50%",
                          backgroundColor: "#100D22",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          boxShadow: "none",
                        }}
                      ></div>
                    )}
                  />
                </div>

                <hr className="mt-4  d-none d-md-block" />

                <h5 className="semi-bold font__size--14 text__14-1024 mb-3  d-none d-md-block">
                  Colour
                </h5>

                <div className="wrapper__color-list  d-none d-md-flex flex-wrap align-items-center">
                  {colorList.map((obj) => {
                    return (
                      <div
                        onClick={() => onClickColor(obj.name)}
                        className="items pointer"
                        style={{ backgroundColor: obj.color }}
                      ></div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-9">
                <div className="wrapper__filter-all-list d-flex justify-content-md-between justify-content-end align-items-center mb-4">
                  <div
                    className={
                      "wrapper__list-select d-none d-md-flex align-items-center flex-wrap"
                    }
                  >
                    <span
                      className={
                        "medium font__size--12 text__12-1024 " +
                        (category == "" &&
                        values[0] == 0 &&
                        values[1] == 2000 &&
                        color == ""
                          ? "d-none"
                          : "")
                      }
                    >
                      Filter
                    </span>
                    {category != "" ? (
                      <div className="items position-relative medium font__size--12 text__12-1024">
                        {category}
                        <div
                          className="closed pointer"
                          onClick={() => onRemove("category")}
                        >
                          <img src="./../images/asda.png" alt="" />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {values[0] != 0 || values[1] != 2000 ? (
                      <div className="items position-relative medium font__size--12 text__12-1024">
                        ${values[0]}-${values[1]}{" "}
                        <div
                          className="closed pointer"
                          onClick={() => onRemove("price")}
                        >
                          <img src="./../images/asda.png" alt="" />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {color != "" ? (
                      <div className="items position-relative medium font__size--12 text__12-1024">
                        {color}{" "}
                        <div
                          className="closed pointer"
                          onClick={() => onRemove("color")}
                        >
                          <img src="./../images/asda.png" alt="" />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="sortBy">
                    <div class="dropdown">
                      <button
                        class="button medium font__size--12 text__12-1024"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          Sort By{" "}
                          <img
                            src="./../images/eva_arrow-ios-forward-fill.png"
                            alt=""
                            className="ml-2 arrow"
                          />
                        </div>
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a
                          class="dropdown-item normal font__size--12 text__12-1024"
                          href="#"
                        >
                          Featured
                        </a>
                        <a
                          class="dropdown-item normal font__size--12 text__12-1024"
                          href="#"
                        >
                          Newest
                        </a>
                        <a
                          class="dropdown-item normal font__size--12 text__12-1024"
                          href="#"
                        >
                          Price High - Low
                        </a>
                        <a
                          class="dropdown-item normal font__size--12 text__12-1024"
                          href="#"
                        >
                          Price Low - High
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {productList.map((obj) => {
                    return (
                      <div className="col-md-6 col-lg-4 mb-4">
                        <CardProduct data={obj} />
                      </div>
                    );
                  })}
                </div>
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

export default Shop;
