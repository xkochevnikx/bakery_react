import React from "react";
import "./App.css";
import SectionProductList from "./Components/Section/SectionProductList/SectionProductList";
import ProductContextProvider from "./context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <ProductContextProvider>
      <MainRoutes />
    </ProductContextProvider>
  );
};

export default App;
