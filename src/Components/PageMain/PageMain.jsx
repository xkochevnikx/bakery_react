import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Footer from "../Footer/Footer";
import HeaderMain from "../Header/HeaderMain/HeaderMain";
import SectionMain from "../Section/SectionMain/SectionMain";

const PageMain = () => {
  return (
    <>
      <BurgerMenu />
      <HeaderMain />
      <SectionMain />
      <Footer />
    </>
  );
};

export default PageMain;
