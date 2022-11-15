import React from "react";
import "./App.css";
import AuthContextProvider from "./context/AuthContextProvider";
import BasketContextProvider from "./context/BasketContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <AuthContextProvider>
      <BasketContextProvider>
        <ProductContextProvider>
          <MainRoutes />
        </ProductContextProvider>
      </BasketContextProvider>
    </AuthContextProvider>
  );
};

export default App;
