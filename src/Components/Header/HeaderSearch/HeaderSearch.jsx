import React from "react";
import "./HeaderSearch.css";
import logo2 from "../../img/logo2.webp";
import icon_head from "../../img/icon_head.svg";
import icon_basket from "../../img/icon_basket.svg";
import { Link } from "react-router-dom";
import LiveSearch from "../../LiveSearch/LiveSearch";

const HeaderSearch = () => {
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
              <Link to="/basket">
                <img src={icon_basket} alt="" />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderSearch;
