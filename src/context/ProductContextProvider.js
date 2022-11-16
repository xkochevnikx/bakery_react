import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { useLocation } from "react-router-dom";

//? создаём контекст и внизу оборачиваем в него детей и передаем данные в value
export const productContext = createContext();

const API = "http://localhost:8000/bakery";

//? создаём первоначальный стейт
const INIT_STATE = {
  productsArr: [],
  productDetails: null,
  pageTotalCount: 1,
};

function reducer(prevState, action) {
  switch (action.type) {
    //?  этот кейс возвращает первоначальное значение объекта/стейта и перезаписывает в него под ключём productsArr весь массив прилетевший с бэка
    case "GET_PRODUCT":
      return {
        ...prevState,
        productsArr: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };
    case "GET_ONE_PRODUCT":
      return { ...prevState, productDetails: action.payload };

    default:
      return prevState;
  }
}

const ProductContextProvider = ({ children }) => {
  //? ниже стейт на переключение бургер меню
  const [menuIsActiv, setMenuIsActiv] = useState(false);
  //? вызываем useReducer
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //? эта волшебная функция стягивает данные из адресной строки и по ключу подсталяет эти данные в хвост функции запроса на отображение продуктов
  const location = useLocation();

  //? функция добавления бэк приняла объект и используя метод axios передала его на API
  async function addProductSave(newProduct) {
    try {
      await axios.post(API, newProduct);
      readProduct();
    } catch (error) {
      return error;
    }
  }

  //? дальше после добавления объекта на бэк мы должны его отобразить - делаем запрос на бэк и сохраняем все данные присланные в переменную, используем useReducer для сохранения всего массива в стейт
  async function readProduct() {
    let products = await axios(`${API}${location.search}`);
    dispatch({
      type: "GET_PRODUCT",
      payload: products,
    });
  }

  //? функция запроса одного объекта для карточки детального обзора и редактирования
  async function readOneProduct(id) {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  }

  //? функция удаления
  async function deliteProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
      readProduct();
    } catch (error) {
      return error;
    }
  }

  //? функция редактирования
  async function editProduct(id, editedObj) {
    await axios.patch(`${API}/${id}`, editedObj);
    readProduct();
  }

  //? сохраняем в переменную всё что хотим ниже передать в провайдер
  let cloud = {
    addProductSave,
    readProduct,
    readOneProduct,
    deliteProduct,
    editProduct,
    productsBakery: state.productsArr,
    productDetails: state.productDetails,
    pageTotalCount: state.pageTotalCount,
    menuIsActiv,
    setMenuIsActiv,
  };

  //? ниже обращаемся к переменной в которую вызвали контекст и обращаемся к методу провайдер. оборачиваем в него детей, которые в APP.js обёрнуты в компонет ProductContextProvider
  return (
    <productContext.Provider value={cloud}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
