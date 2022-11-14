import React, { useContext } from "react";
import { useEffect } from "react";
import { basketContext } from "../../context/BasketContextProvider";
import "./Basket.css";
import Footer from "../Footer/Footer";
import HeaderSearch from "../Header/HeaderSearch/HeaderSearch";
import icon_delite from "../img/icon_delite.svg";

const Basket = () => {
  const {
    productsInBasket,
    getBasket,
    deleteBasketProduct,
    changeProductCount,
  } = useContext(basketContext);

  useEffect(() => {
    getBasket();
  }, []);

  //? ниже в инпуте на каждое изменение числа мы вызываем функцию изменения итоговой цены и передаём в неё id и число из инпута
  return (
    <>
      {productsInBasket ? (
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
            {productsInBasket.products.map(elem => (
              <div key={elem.item.id} className="basket__product_card">
                <div className="product__card_left">
                  <div className="product_img">
                    <img id="product_img" src={elem.item.img} alt="" />
                  </div>
                  <div className="product_text">
                    <h3>{elem.item.name}</h3>
                  </div>
                </div>
                <div className="product__card_right">
                  <input
                    min="1"
                    value={elem.count}
                    id="inpProdCard"
                    type="number"
                    onChange={e => {
                      changeProductCount(elem.item.id, e.target.value);
                    }}
                  />
                  <div className="card_right_icon">
                    <h3>{elem.item.prise}сом</h3>
                    <img
                      src={icon_delite}
                      onClick={() => deleteBasketProduct(elem.item.id)}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="btnTotalPrise">
              <button id="btnTotalPrise">
                итого к оплате {productsInBasket.totalPrise}
              </button>
            </div>
          </div>

          <Footer />
        </>
      ) : null}
    </>
  );
};

export default Basket;
