import React, { useContext } from "react";
import "./HeaderMain.css";
import logo2 from "../../img/logo2.webp";
import burger from "../../img/menu_burger_icon.png";
import { Link } from "react-router-dom";
import { productContext } from "../../../context/ProductContextProvider";

const HeaderMain = () => {
  const { menuIsActiv, setMenuIsActiv } = useContext(productContext);

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
            <ol className="header__box_navbar_list_main">
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

export default HeaderMain;
