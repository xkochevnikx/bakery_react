import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import PageMain from "./Components/PageMain/PageMain";
import PageSecond from "./Components/PageSecond/PageSecond";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import PageProduct from "./Components/PageProduct/PageProduct";
import SectionProductList from "./Components/Section/SectionProductList/SectionProductList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageMain />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/pagesecond" element={<PageSecond />} />
      <Route path="/pageproduct" element={<PageProduct />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
