import React from "react";
import "./ProductCard.css";

const ProductCard = ({ obj }) => {
  console.log(obj);
  return (
    <div className="section__box_card">
      <h2 className="card_name">{obj.name}</h2>
      <img className="card_image" src={obj.img} alt="" />
      <h3 className="card_description">{obj.description}</h3>
      <h3 className="card_price">
        {obj.price} <span>сом</span>
      </h3>
      <button className="btnProduct"> подробнее </button>
    </div>
  );
};

export default ProductCard;
