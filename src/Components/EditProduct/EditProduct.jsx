import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../context/ProductContextProvider";
import HeaderSearch from "../Header/HeaderSearch/HeaderSearch";

//? функция редактирования. после нажатия кнопки редактирования в карточке EditproductCard - navigate переносит нас на роут edit/:id.
const EditProduct = () => {
  const { productDetails, readOneProduct, editProduct } =
    useContext(productContext);

  //? парамс сразу видит строку и стягивает этот номер id.
  const { id } = useParams();

  const [editedObj, setEditedObj] = useState(productDetails);

  //? useEffect видит что произошли изменения в id и подставляется его в аргументы функции запроса на получения данных по этому продукту. Обратно в productDetails прилетает продукт из конткста.
  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  //? следующий useEffect видит что обновились данные в productDetails и сохраняет их в стейт
  useEffect(() => {
    setEditedObj(productDetails);
  }, [productDetails]);

  //? этот метод перекидвает нас после изменений в страницу отображения продуктов
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
      !+editedObj.prise ||
      !editedObj.category.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }
    //? функция редактирования принимает два аргумента - id и объект на который следует заменить на бэке старый
    editProduct(id, editedObj);
    navigate("/pageproduct");
  }

  //? ниже условный рендеринг на отображение и инпуты в значение которых подсталены ключи объекта прилетевшего в стейт. Каждому привоен атрибут name что бы потом обращаясь в нему перезаписывать в этот ключ новое значение поля инпута. Это перезапись значения происходит каждый раз при нажатиии (навешан onChаnge ) и функция которая копирует объект - перезаписывает значения и отправляет их обратно в стейт
  return (
    <div>
      {editedObj ? (
        <>
          <HeaderSearch />
          <div className="add">
            <input
              className="inpAddandChange"
              type="text"
              value={editedObj.name}
              placeholder="name"
              name="name"
              onChange={e => handleChange(e)}
            />
            <input
              className="inpAddandChange"
              type="text"
              value={editedObj.img}
              placeholder="img"
              name="img"
              onChange={e => handleChange(e)}
            />
            <input
              className="inpAddandChange"
              type="text"
              value={editedObj.desc}
              placeholder="desc"
              name="desc"
              onChange={e => handleChange(e)}
            />
            <input
              className="inpAddandChange"
              type="text"
              value={editedObj.prise}
              placeholder="prise"
              name="prise"
              onChange={e => handleChange(e)}
            />
            <input
              className="inpAddandChange"
              type="text"
              value={editedObj.category}
              placeholder="category"
              name="category"
              onChange={e => handleChange(e)}
            />

            <button className="BtnAddandChange" onClick={e => handleSave(e)}>
              {" "}
              добавить{" "}
            </button>
          </div>
        </>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default EditProduct;
