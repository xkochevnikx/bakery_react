import axios from "axios";
import React, { createContext, useReducer } from "react";

//? создаём контекст и внизу оборачиваем в него детей и передаем данные в value
export const productContext = createContext();

const API = "http://localhost:8000/bakery";

//? создаём первоначальный стейт
const INIT_STATE = {
  productsArr: [],
  productDetails: null,
};

function reducer(prevState, action) {
  switch (action.type) {
    //?  этот кейс возвращает первоначальное значение объекта/стейта и перезаписывает в него под ключём productsArr весь массив прилетевший с бэка
    case "GET_PRODUCT":
      return {
        ...prevState,
        productsArr: action.payload.data,
      };
    case "GET_ONE_PRODUCT":
      return { ...prevState, productDetails: action.payload };
    default:
      return prevState;
  }
}

const ProductContextProvider = ({ children }) => {
  //? вызываем useReducer
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //? функция добавления бэе приняла объект и используя метод axios передала его на API
  async function addProductSave(newProduct) {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      return error;
    }
  }

  //? дальше после добавления объекта на бэк мы должны его отобразить - делаем запрос на бэк и сохраняем все данные присланные в переменную, используем useReducer для сохранения всего массива в стейт
  async function readProduct() {
    let products = await axios(API);
    dispatch({
      type: "GET_PRODUCT",
      payload: products,
    });
  }

  async function readOneProduct(id) {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  }

  //? сохраняем в переменную всё что хотим ниже передать в провайдер
  let cloud = {
    addProductSave,
    readProduct,
    readOneProduct,
    productsBakery: state.productsArr,
    productDetails: state.productDetails,
  };

  //? ниже обращаемся к переменной в которую вызвали контекст и обращаемся к методу провайдер. оборачиваем в него детей, которые в APP.js обёрнуты в компонет ProductContextProvider
  return (
    <productContext.Provider value={cloud}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
