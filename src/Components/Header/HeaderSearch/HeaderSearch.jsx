import React, { useContext } from "react";
import "./HeaderSearch.css";
import logo2 from "../../img/logo2.webp";
import icon_head from "../../img/icon_head.svg";
import icon_basket from "../../img/icon_basket.svg";
import { Link } from "react-router-dom";
import LiveSearch from "../../LiveSearch/LiveSearch";
import { basketContext } from "../../../context/BasketContextProvider";
import { UserContext } from "../../../context/AuthContextProvider";
import burger from "../../img/menu_burger_icon.png";
import { productContext } from "../../../context/ProductContextProvider";

const HeaderSearch = () => {
  //? для отображения колличества продуктов над корзиной ловлю из баскетпродуктс контекст
  const { basketCount } = useContext(basketContext);
  const { menuIsActiv, setMenuIsActiv } = useContext(productContext);

  const { user, logout } = useContext(UserContext);

  return (
    <>
      <header>
        <nav>
          <div className="header__box">
            <div className="header__box_logo">
              <Link to="/">
                <img src={logo2} alt="" />
              </Link>
            </div>
            <ol className="header__box_navbar_list">
              <li>
                <Link to="/">О хлебопёке</Link>
              </li>
              <li>
                <Link to="/pageproduct">Мы печём</Link>
              </li>
              <li>
                <Link to="/pagesecond">Контроль качества</Link>
              </li>
            </ol>
            <div className="header__search">
              <LiveSearch />
              {/* <input id="inpSearch" type="text" placeholder="найти буличку" /> */}
              <br />
              <Link to="/adminpage">
                <img src={icon_head} alt="" />
              </Link>
              {user ? (
                <Link to="/basket">
                  <div className="header_basket_box">
                    <span>{basketCount}</span>
                    <img src={icon_basket} alt="" />
                  </div>
                </Link>
              ) : (
                <Link to="/signUp">
                  <div className="header_basket_box">
                    <span>{basketCount}</span>
                    <img src={icon_basket} alt="" />
                  </div>
                </Link>
              )}
            </div>
            <img
              onClick={() => setMenuIsActiv(!menuIsActiv)}
              class="btn_burger"
              src={burger}
              alt=""
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderSearch;
