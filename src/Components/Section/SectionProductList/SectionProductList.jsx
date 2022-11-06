import React from "react";
import { useEffect, useContext } from "react";
import "./SectionProductList.css";
import { productContext } from "../../../context/ProductContextProvider";
import ProductCard from "../../Product/ProductCard/ProductCard";

const SectionProductList = () => {
  const { productsBakery, readProduct } = useContext(productContext);

  useEffect(() => {
    readProduct();
  }, []);

  console.log(productsBakery);
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
            : null}
        </div>
      </section>
    </>
  );
};

export default SectionProductList;
