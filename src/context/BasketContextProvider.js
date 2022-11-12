import React, { createContext, useReducer } from "react";

export const basketContext = createContext();

//? создаю функцию колличества продуктов в локале, сохраняю в перменную данные с локала и возвращаю условие - если в локале что то есть это true и прошу вернуть длинну массива products, если ничего нет то это 0. Далее в стейте сохраняю это число с помощью вызова функции в значении свойства getCountProductsBasket

// function getCountProductsBasket() {
//   const basket = JSON.parse(localStorage.getItem("basket"));
//   return basket ? basket.products.lenght : 0;
// }
//? инициируем стейт начальное сотояние это то что прилетит нам из локал если в нём что то уже есть .если нет прилетит null
const INIT_STATE = {
  basket: JSON.parse(localStorage.getItem("basket")),
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
    //? если переменная пуста то в эту переменную ложим объект с ключём products (это массив). Если не пуста то новый объект будем добавлять в массив под ключём products
    if (basket === null) {
      basket = {
        products: [],
        totalPrise: 0,
      };
    }

    let newProduct = {
      //? в item прилетел продукт переданный при нажатии купить
      item: productObj,
      //? дальше колличество
      count: 1,
      //? и цена записывается под отдельным ключём для последующего сложения сумм
      subPrise: productObj.prise,
    };
    // //? обращаемся к массиву products и пушим в него объект с продуктом
    basket.products.push(newProduct);
    //? далее берём баскет и отправляем в локал новые данные
    basket.totalPrise = calcTotalPrise(basket.products);
    localStorage.setItem("basket", JSON.stringify(basket));
  }

  //? далее создаём функцию отображения на странице
  function getBasket() {
    //? вытягиваем в переменную всё содержимое в локале под ключём баскет и делаем проверку если там пусто то создаём её
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      basket = {
        products: [],
        totalPrice: 0,
      };
    }
    //? и тут перезаписываем эту переменную объект в useReduser и передаём контекстом в элемент Basket
    dispatch({
      type: "GET_BASKET",
      payload: basket,
    });
  }

  //? функция подсчёта итоговой суммы - задаём переменную 0 и проходимся циклом по массиву продуктов прибавляя всё значнеия подд ключами subPrise к переменной total и функция возвращает итоговую сумму

  function calcTotalPrise(products) {
    let total = 0;
    products.map(item => {
      total += item.subPrise;
    });
    return total;
  }

  //? создаём функцию удаления из корзины
  //? функция принимает в параметры id при нажатии на удалить и тут она вытягивает в переменную из локала весь объект далее обращается к ключу в котором лежат данные продукта и проходиться по нему фильтром который возвращает обратно продукты id которых не равно переданному в параметры. Перезаписывает новый массив под ключём products. Далее добавляем в локал обновлённую переменную и вызываем заново функцию отображения продуктов в корзине

  function deleteBasketProduct(id) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket.products = basket.products.filter(elem => {
      return elem.item.id !== id;
    });
    basket.totalPrise = calcTotalPrise(basket.products);
    //? после удаления пересчитываем итоговую сумму и перезаписываем её,под этим ключём находитьсяя общая стоимость товаров. что бы посчиать создаём функцию которая будет принимать массив с товарами вытаскивть ключи subPrise складывая их
    localStorage.setItem("basket", JSON.stringify(basket));
    getBasket();
  }

  const cloud = {
    addProductToBasket,
    productsInBasket: state.basket,
    getBasket,
    deleteBasketProduct,
  };
  return (
    <basketContext.Provider value={cloud}>{children}</basketContext.Provider>
  );
};

export default BasketContextProvider;
