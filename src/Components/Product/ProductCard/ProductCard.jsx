import React from "react";
import "./ProductCard.css";
import iconDel from "../../img/icon_delite.svg";
import iconEdit from "../../img/icon_edit.svg";
import { Link, useNavigate, useParams } from "react-router-dom";

//? это компонен карточки сюда прилетают продукты по отдельности и их значения подставляем в теги
const ProductCard = ({ obj }) => {
  return (
    <div className="section__box_card">
      <h2 className="card_name">{obj.name}</h2>
      <img className="card_image" src={obj.img} alt="" />
      <h3 className="card_description">{obj.description}</h3>
      <h3 className="card_price">
        {obj.price} <span>сом</span>
      </h3>
      <div className="admin__box">
        <img className="card_delete" src={iconDel} alt="" id={obj.id} />
        <img className="card_edit" src={iconEdit} alt="" />
      </div>

      <button id="btnProduct">
        <Link id="linkBtnProduct" to={`/details/${obj.id}`}>
          подробнее
        </Link>
      </button>
    </div>
  );
};

export default ProductCard;
