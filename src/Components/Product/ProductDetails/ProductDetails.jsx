import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { basketContext } from "../../../context/BasketContextProvider";
import { productContext } from "../../../context/ProductContextProvider";
import HeaderSearch from "../../Header/HeaderSearch/HeaderSearch";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productDetails, readOneProduct } = useContext(productContext);
  //todo кароче мы переходим на details/:id и useParams вытаскивает из адресной строки номер id и передаёт его в аргументы readOneProduct та в свою очередь делает новый запрос и передаёт сюда из контекста один объект который мы тут пилим по ключам

  //? импортируем basketContext , вызываем хук и вытаскиваем функцию добавления в корзину продукта и вызываем при нажатии на кнопку купить вызываем онклик передаём коллбэк и в нём вызываем функцию в аргументы передаём объект productDetails
  const { addProductToBasket } = useContext(basketContext);

  const { id } = useParams();

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  return (
    <>
      {productDetails ? (
        <div>
          <HeaderSearch />
          <div className="detailContainer">
            <div className="detailContainer_left">
              <div className="detailContainer_left_first">
                {productDetails.name}
              </div>
              <div className="detailContainer_left_second">
                <img
                  className="detailContainer_left_second_img"
                  src={productDetails.img}
                  alt="Картинка булочки"
                />
              </div>
            </div>
            <div className="detailContainer_right">
              <div className="detailContainer_right_first">
                <p className="detailContainer_right_first_p">ВЕС: 160Г</p>
              </div>
              <div className="detailContainer_right_second">
                <span className="detailContainer_right_second_span">
                  {productDetails.description}
                </span>

                <span className="detailContainer_right_second_span">
                  ПИЩЕВАЯ ЦЕННОСТЬ
                </span>
                <span className="detailContainer_right_second_span">
                  Белки — 9,5 г. <br />
                  Жиры — 11,8 г. <br />
                  Углеводы — 49,1 г.
                </span>
                <span className="detailContainer_right_second_span">
                  ЭНЕРГИТИЧЕСКАЯ ЦЕННОСТЬ
                </span>
                <span className="detailContainer_right_second_span">
                  341 ккал/1426,7 кДж
                </span>
                <button onClick={() => addProductToBasket(productDetails)}>
                  Купить
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default ProductDetails;
