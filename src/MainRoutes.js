import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import PageMain from "./Components/PageMain/PageMain";
import PageSecond from "./Components/PageSecond/PageSecond";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import PageProduct from "./Components/PageProduct/PageProduct";
import ProductDetails from "./Components/Product/ProductDetails/ProductDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageMain />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/pagesecond" element={<PageSecond />} />
      <Route path="/pageproduct" element={<PageProduct />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
