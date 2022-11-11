import React, { createContext, useReducer } from "react";

export const basketContext = createContext();

//? инициируем стейт начальное сотояние это то что прилетит нам из локал если в нём что то уже есть .если нет прилетит null
const INIT_STATE = {
  basket: JSON.parse(localStorage.getItem("basket")),
  //? это колличество данных в корзине которое прилетит в иконку над иконкой корзины
  // basketCount: getCountProductsBasket(),
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_BASKET":
      return { ...prevState, basket: action.payload };
    default:
      return prevState;
  }
}

const BasketContextProvider = ({ children }) => {
  //? вызываем редюсер первый аргумент это функция второй это начальное состояние
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //? эта функция вызывается в productDetails
  function addProductToBasket(productObj) {
    //? вытягиваем всё в переменную из локала
    let basket = JSON.parse(localStorage.getItem("basket"));
    //? если переменная пуста то в эту переменную ложим объект с ключём products (это массив)
    if (basket === null) {
      basket = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      //? в item прилетел продукт переданный при нажатии купить
      item: productObj,
      //? дальше колличество
      count: 1,
      //? и цена
      subPrise: productObj.prise,
    };
    basket.products.push(newProduct);
    localStorage.setItem("basket", JSON.stringify(basket));
    console.log(basket);
  }

  function getBasket() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      basket = {
        products: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: "GET_BASKET",
      payload: basket,
    });
  }

  // //? хранение дубликатов
  // let filterBasket = basket.products.filter(elem => {
  //   return elem.item.id === productObj.id;
  // });

  const cloud = {
    addProductToBasket,
    productsInBasket: state.basket,
    getBasket,
    // changeProductCount,
    // deleteBasketProduct,
  };
  return (
    <basketContext.Provider value={cloud}>{children}</basketContext.Provider>
  );
};

export default BasketContextProvider;
