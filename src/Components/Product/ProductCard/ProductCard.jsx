import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

//? это компонен карточки сюда прилетают продукты по отдельности и их значения подставляем в теги

// todo ниже в линке на кнопке поставлена динамическая ссылка на заранее приготовленный роут с динамически подставляемым id из пропса с объектом.

const ProductCard = ({ obj }) => {
  return (
    <div className="section__box_card_g">
      <h2 className="card_name">{obj.name}</h2>
      <img className="card_image" src={obj.img} alt="" />
      <h3 className="card_description">{obj.desc}</h3>
      <h3 className="card_price">
        {obj.prise} <span>сом</span>
      </h3>

      <button id="btnProduct">
        <Link id="linkBtnProduct" to={`/details/${obj.id}`}>
          подробнее
        </Link>
      </button>
    </div>
  );
};

export default ProductCard;
