import React, { useContext } from "react";
import iconDel from "../img/icon_delite.svg";
import iconEdit from "../img/icon_edit.svg";
import "./EditProductCard.css";
import { productContext } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const EditProductCard = ({ obj }) => {
  const { deliteProduct } = useContext(productContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="section__box_card">
        <h2 className="card_name">{obj.name}</h2>
        <img className="card_image" src={obj.img} alt="" />
        <h3 className="card_desc">{obj.desc}</h3>
        <h3 className="card_price">
          {obj.prise} <span>сом</span>
        </h3>
        <div className="admin__box">
          <img
            className="card_delete"
            onClick={() => deliteProduct(obj.id)}
            src={iconDel}
            alt=""
            id={obj.id}
          />
          <img
            onClick={() => navigate(`/edit/${obj.id}`)}
            className="card_edit"
            src={iconEdit}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default EditProductCard;
