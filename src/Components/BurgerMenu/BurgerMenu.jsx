import React, { useContext } from "react";
import "./BurgerMenu.css";
import logo2 from "../img/logo2.webp";
import { Link } from "react-router-dom";
import { productContext } from "../../context/ProductContextProvider";

const BurgerMenu = () => {
  const { menuIsActiv, setMenuIsActiv } = useContext(productContext);
  return (
    <>
      <div className={menuIsActiv ? "menu activ" : "menu"}>
        <div className="blur"></div>
        <div className="menu_content">
          <img src={logo2} alt="" />

          <Link to="/">О хлебопёке</Link>

          <Link to="/pageproduct">Мы печём</Link>

          <Link to="/pagesecond">Контроль качества</Link>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
