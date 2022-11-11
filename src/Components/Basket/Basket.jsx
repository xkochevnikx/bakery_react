import React, { useContext } from "react";
import { useEffect } from "react";
import { basketContext } from "../../context/BasketContextProvider";
import "./Basket.css";
import Footer from "../Footer/Footer";
import HeaderSearch from "../Header/HeaderSearch/HeaderSearch";
import icon_delite from "../img/icon_delite.svg";

const Basket = () => {
  const { productsInBasket, getBasket } = useContext(basketContext);

  useEffect(() => {
    getBasket();
  }, []);

  return (
    <>
      <HeaderSearch />

      <div className="basket__box">
        <div className="basket__title"> КОРЗИНКА </div>
        <div className="basket__product_title">
          <div className="product__title_left">
            <h2>Продукт</h2>
          </div>
          <div className="product__title_right">
            {" "}
            <h2>Колличество</h2> <h2> Стоимость</h2>
          </div>
        </div>
        <div className="basket__product_card">
          <div className="product__card_left">
            <div className="product_img">
              <img src="" alt="" />
            </div>
            <div className="product_text">
              <h3>Name</h3>
              <h3>desc</h3>
            </div>
          </div>
          <div className="product__card_right">
            <input id="inpProdCard" important type="number" name="" />
            <div className="card_right_icon">
              <h3>Цена</h3>
              <img src={icon_delite} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Basket;
