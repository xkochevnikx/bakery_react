import React from "react";
import Footer from "../Footer/Footer";
import HeaderSearch from "../Header/HeaderSearch/HeaderSearch";
import SectionProductList from "../Section/SectionProductList/SectionProductList";
import "./PageProduct.css";

const PageProduct = () => {
  return (
    <>
      <HeaderSearch />
      <SectionProductList />
      <Footer />
    </>
  );
};

export default PageProduct;
