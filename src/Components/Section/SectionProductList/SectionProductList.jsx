import React from "react";
import { useEffect, useContext } from "react";
import "./SectionProductList.css";
import { productContext } from "../../../context/ProductContextProvider";
import ProductCard from "../../Product/ProductCard/ProductCard";
import { useSearchParams } from "react-router-dom";

//? это компонент отображения всех продуктов, он подставляется в середину между хэдером и футером в компоненте страницы PageProducts
const SectionProductList = () => {
  //? тут вызываем контекст и вытягиваем массив продуктов с бэка и функцию отображения ложим в useEffect что бы она отработала только один раз в начале
  const { productsBakery, readProduct } = useContext(productContext);

  const [paramsSearch, setParamsSearch] = useSearchParams();

  useEffect(() => {
    readProduct();
  }, [paramsSearch]);

  //? ниже основной контейнер компонента отображения продуктов, в нем условный рендеринг который в случае наличия данных начинает их перебирать и вызываем компонет карточки продукта передаёт в него каждый продукт по отдельности
  return (
    <>
      <div className="prevNextBtn">
        <button id="btnPrev">назад</button>
        <button id="btnNext">следующая страница</button>
      </div>

      <form>
        <input type="radio" value="хлеб" name="булки" />
        <label for="хлеб">хлебушек</label>
        <br />
        <input type="radio" value="выпечка" name="булки" />
        <label for="выпечка">выпечка</label>
        <br />
        <input type="radio" value="десерты" name="булки" />
        <label for="десерты">десерты</label>
        <br />
        <input type="radio" value="all" name="булки" />
        <label for="all">вся выпечка</label>
      </form>

      <section>
        <div class="section__box">
          {productsBakery
            ? productsBakery.map(item => (
                <ProductCard obj={item} key={item.id} />
              ))
            : "LOADING..."}
        </div>
      </section>
    </>
  );
};

export default SectionProductList;
