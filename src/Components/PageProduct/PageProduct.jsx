import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Footer from "../Footer/Footer";
import HeaderSearch from "../Header/HeaderSearch/HeaderSearch";
import SectionProductList from "../Section/SectionProductList/SectionProductList";

const PageProduct = () => {
  return (
    <>
      <BurgerMenu />
      <HeaderSearch />
      <SectionProductList />
      <Footer />
    </>
  );
};

export default PageProduct;
