//? импортировали всё что нужно, компоненты вёрстки и методы
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../../context/ProductContextProvider";
import HeaderSearch from "../../Header/HeaderSearch/HeaderSearch";
import "./AddProduct.css";

//? создаём компонент добавления
const AddProduct = () => {
  //? вызываем хук useContext и вытаскиваем из облака productContext функцию добавления продукта на бэк в аргументы она принимает объект с данными из input
  const { addProductSave } = useContext(productContext);

  const navigate = useNavigate();

  //? создаём 5 стэйтов на каждое значение из input
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [prise, setPrise] = useState(0);
  const [category, setCategory] = useState("");

  //? создаём функцию добавления данных в объект который мы должны положить в аргументы переданной сюда функции из ProductContextProvider
  function handleSave() {
    if (
      !name.trim() ||
      !img.trim() ||
      !desc.trim() ||
      !prise.trim() ||
      !category.trim()
    ) {
      alert("заполните все поля");
      return;
    }
    //? создаём объект в значения которого ложим показания стэйтов которые считывали данные с input
    let newProduct = {
      name,
      img,
      desc,
      prise: +prise,
      category,
    };
    //? вызываем функцию добавления объекта на бэк
    addProductSave(newProduct);
    //? после отправки данных очищаем все стейты
    setName("");
    setImg("");
    setDesc("");
    setPrise(0);
    setCategory("");
  }
  return (
    <>
      <HeaderSearch />

      <div className="add">
        <input
          className="inpAddandChange"
          type="text"
          value={name}
          placeholder="название"
          onChange={e => setName(e.target.value)}
        />
        <input
          className="inpAddandChange"
          type="text"
          value={img}
          placeholder="фото"
          onChange={e => setImg(e.target.value)}
        />
        <input
          className="inpAddandChange"
          type="text"
          value={desc}
          placeholder="описание"
          onChange={e => setDesc(e.target.value)}
        />
        <input
          className="inpAddandChange"
          type="number"
          value={prise}
          placeholder="цена"
          onChange={e => setPrise(e.target.value)}
        />
        <input
          className="inpAddandChange"
          type="text"
          value={category}
          placeholder="категория"
          onChange={e => setCategory(e.target.value)}
        />
        <button className="BtnAddandChange" onClick={handleSave}>
          {" "}
          добавить{" "}
        </button>
      </div>
    </>
  );
};

export default AddProduct;
