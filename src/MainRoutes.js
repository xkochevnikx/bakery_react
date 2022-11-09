import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import PageMain from "./Components/PageMain/PageMain";
import PageSecond from "./Components/PageSecond/PageSecond";
import PageProduct from "./Components/PageProduct/PageProduct";
import ProductDetails from "./Components/Product/ProductDetails/ProductDetails";
import EditSectionProductList from "./Components/EditSectionProduct/EditSectionProductList";
import EditProduct from "./Components/EditProduct/EditProduct";
import Basket from "./Components/Basket/Basket";

const MainRoutes = () => {
  // todo в роуте details/:id подставлен компонент ProductDetails. Когда переходим на этот путь компонент подгружается и в новый запрос на бэк (функция readOneProduct обёрнута в useEffect что бы отработать один раз при изменении id)  падает id из адресной строки.
  return (
    <Routes>
      <Route path="/" element={<PageMain />} />
      <Route path="/pagesecond" element={<PageSecond />} />
      <Route path="/pageproduct" element={<PageProduct />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/adminpage" element={<EditSectionProductList />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/basket" element={<Basket />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
