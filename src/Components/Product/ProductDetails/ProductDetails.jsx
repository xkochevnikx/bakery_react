import React from "react";
import "./ProductDetails.css";
const ProductDetails = () => {
  return (
    <>
      <div className="detailContainer">
        <div className="detailContainer_left">
          <div className="detailContainer_left_first">БАГЕТ ЧЕСНОЧНЫЙ</div>
          <div className="detailContainer_left_second">
            <img
              className="detailContainer_left_second_img"
              src="https://thumb.tildacdn.com/tild6436-3937-4331-b264-633531323366/-/format/webp/_.jpg"
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
              Багет из пшеничной муки высшего сорта с ароматной чесночной
              начинкой и зеленью.
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
    </>
  );
};
export default ProductDetails;
