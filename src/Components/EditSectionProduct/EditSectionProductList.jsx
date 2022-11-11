import React, { useContext, useEffect } from "react";
import "./EditSectionProductList.css";
import HeaderSearch from "../Header/HeaderSearch/HeaderSearch";
import { productContext } from "../../context/ProductContextProvider";
import EditProductCard from "../EditProductCard/EditProductCard";
import AddProduct from "../Admin/AddProduct/AddProduct";

const EditSectionProductList = () => {
  const { readProduct, productsBakery } = useContext(productContext);

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <>
      <HeaderSearch />
      <AddProduct />
      <section>
        <div class="section__box">
          {productsBakery
            ? productsBakery.map(item => (
                <EditProductCard obj={item} key={item.id} />
              ))
            : "LOADING..."}
        </div>
      </section>
    </>
  );
};

export default EditSectionProductList;
