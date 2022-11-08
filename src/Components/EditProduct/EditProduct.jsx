import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../context/ProductContextProvider";
import HeaderSearch from "../Header/HeaderSearch/HeaderSearch";
import "./EditProduct.css";

const EditProduct = () => {
  const { productDetails, readOneProduct, editProduct } =
    useContext(productContext);

  const { id } = useParams();
  const [editedObj, setEditedObj] = useState(productDetails);

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  useEffect(() => {
    setEditedObj(productDetails);
  }, [productDetails]);

  const navigate = useNavigate();

  function handleChange(e) {
    let obj = {
      ...editedObj,
      [e.target.name]: e.target.value,
    };
    setEditedObj(obj);
  }

  function handleSave(e) {
    if (
      !editedObj.name.trim() ||
      !editedObj.img.trim() ||
      !editedObj.desc.trim() ||
      !editedObj.prise.trim() ||
      !editedObj.category.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }
    editProduct(id, editedObj);
    navigate("/pageproduct");
  }

  return (
    <div>
      {editedObj ? (
        <>
          <HeaderSearch />
          <div className="add">
            <input
              type="text"
              value={editedObj.name}
              placeholder="name"
              name="name"
              onChange={e => handleChange(e)}
            />
            <input
              type="text"
              value={editedObj.img}
              placeholder="name"
              name="name"
              onChange={e => handleChange(e)}
            />
            <input
              type="text"
              value={editedObj.desc}
              placeholder="name"
              name="name"
              onChange={e => handleChange(e)}
            />
            <input
              type="text"
              value={editedObj.prise}
              placeholder="name"
              name="name"
              onChange={e => handleChange(e)}
            />
            <input
              type="text"
              value={editedObj.category}
              placeholder="name"
              name="name"
              onChange={e => handleChange(e)}
            />

            <button onClick={e => handleSave(e)}> добавить </button>
          </div>
        </>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default EditProduct;
