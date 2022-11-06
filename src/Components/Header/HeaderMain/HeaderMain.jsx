import React from "react";
import "./HeaderMain.css";
import logo2 from "../../img/logo2.webp";
import { Link } from "react-router-dom";

const HeaderMain = () => {
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
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderMain;
