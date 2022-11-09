import React from "react";
import "./App.css";
import BasketContextProvider from "./context/BasketContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <BasketContextProvider>
      <ProductContextProvider>
        <MainRoutes />
      </ProductContextProvider>
    </BasketContextProvider>
  );
};

export default App;
