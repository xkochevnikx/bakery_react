import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../../../context/ProductContextProvider";
import HeaderSearch from "../../Header/HeaderSearch/HeaderSearch";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productDetails, readOneProduct } = useContext(productContext);

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
                  {productDetails.desc}
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
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default ProductDetails;
