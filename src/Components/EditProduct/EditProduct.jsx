import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../context/ProductContextProvider";
import HeaderSearch from "../Header/HeaderSearch/HeaderSearch";
import "./EditProduct.css";

const EditProduct = () => {
  const { productEditDetails, readEditOneProduct } = useContext(productContext);

  const { id } = useParams();

  useEffect(() => {
    readEditOneProduct(id);
  }, [id]);

  console.log(id);
  console.log(productEditDetails);
  return (
    <div>
      <HeaderSearch />

      <div className="add">
        <input type="text" placeholder="название" />
        <input type="text" placeholder="фото" />
        <input type="text" placeholder="описание" />
        <input type="number" placeholder="цена" />
        <input type="text" placeholder="категория" />
        <button> добавить </button>
      </div>
    </div>
  );
};

export default EditProduct;
