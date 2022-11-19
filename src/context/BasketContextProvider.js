import React, { createContext, useReducer } from "react";

export const basketContext = createContext();

//? создаю функцию колличества продуктов в локале, сохраняю в перменную данные с локала и возвращаю условие - если в локале что то есть это true и прошу вернуть длинну массива products, если ничего нет то это 0. Далее в стейте сохраняю это число с помощью вызова функции в значении свойства getCountProductsBasket и передаю в элемент отображения в данном случае это хедерсёрч.  она запускается при первой загрузке страницы, потом уже при каждом изменении корзины значение будет обновлятся через диспатч

function getCountProductsBasket() {
  let basket = JSON.parse(localStorage.getItem("basket"));
  return basket ? basket.products.length : 0;
}

//? инициируем стейт начальное сотояние это то что прилетит нам из локал если в нём что то уже есть .если нет прилетит null
const INIT_STATE = {
  basket: JSON.parse(localStorage.getItem("basket")),
  basketCount: getCountProductsBasket(),
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_BASKET":
      return { ...prevState, basket: action.payload };
    case "CHANGE_BASKET_COUNT":
      return { ...prevState, basketCount: action.payload };
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
    //? условия на отсутсвие дубликатов в корзине. Всё это еще на стадии добавления товара в корзину. Обращаемся к массиву products в баскете и пребираем его фильтром, если в массиве есть продукты с таким же id как и в новом объекте то добавляем их в перменную
    let filterBasket = basket.products.filter(elem => {
      return elem.item.id === productObj.id;
    });
    //? если в переменной лежит дубликат то останавливаем функцию если нет то пушим новый продукт в массив продуктс
    if (filterBasket.length > 0) {
      alert("Такой товар уже лежит в корзине :)");
      return;
    } else {
      basket.products.push(newProduct);
    }
    //? обновляем итоговую сумму
    basket.totalPrise = calcTotalPrise(basket.products);
    localStorage.setItem("basket", JSON.stringify(basket));
    dispatch({
      type: "CHANGE_BASKET_COUNT",
      payload: basket.products.length,
    });
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

  //? это функция изменения итоговой цены принимает в себя id продукта и число из инпута
  function changeProductCount(id, count) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    //? достаём в переменную содержимое локала и возвраем в нее результат перебора массива где говорим что если id продукта в нём равно id прилетешвем из инпута то надо перезаписать значения ключа count на это значение и перезаписать итоговую стоимость которая будет расчитываться в результате умножения перезаписываемого count на цену продукта
    basket.products = basket.products.map(elem => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrise = count * elem.item.prise;
      }
      return elem;
    });
    //? обновляем итоговую стоимость
    basket.totalPrise = calcTotalPrise(basket.products);
    localStorage.setItem("basket", JSON.stringify(basket));
    getBasket();
  }

  //? функция подсчёта итоговой суммы - задаём переменную 0 и проходимся циклом по массиву продуктов прибавляя всё значнеия под ключами subPrise к переменной total и функция возвращает итоговую сумму
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
    //? после удаления пересчитываем итоговую сумму и перезаписываем её,под этим ключём находитьсяя общая стоимость товаров. что бы посчиать создаём функцию которая будет принимать массив с товарами вытаскивть ключи subPrise складывая их
    basket.totalPrise = calcTotalPrise(basket.products);
    //? а так же надо пересчитать колличество товаров в корзине для этого вызываем диспатч и ложим в стейт новое колличетсво объектов в массиве products
    dispatch({
      type: "CHANGE_BASKET_COUNT",
      payload: basket.products.length,
    });
    localStorage.setItem("basket", JSON.stringify(basket));
    getBasket();
  }

  const cloud = {
    addProductToBasket,
    getBasket,
    changeProductCount,
    deleteBasketProduct,
    basketCount: state.basketCount,
    productsInBasket: state.basket,
  };

  return (
    <basketContext.Provider value={cloud}>{children}</basketContext.Provider>
  );
};

export default BasketContextProvider;
