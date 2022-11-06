import React from "react";
import Footer from "../Footer/Footer";
import HeaderMain from "../Header/HeaderMain/HeaderMain";
import ProductDetails from "../Product/ProductDetails/ProductDetails";
import SectionSecond from "../Section/SectionSecond/SectionSecond";
import "./PageSecond.css";

const PageSecond = () => {
  return (
    <>
      <HeaderMain />
      <SectionSecond />
      <Footer />
      <ProductDetails />
    </>
  );
};

export default PageSecond;
