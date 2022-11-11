import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { useEffect } from "react";
import { basketContext } from "../../context/BasketContextProvider";
import "./Basket.css";
import Footer from "../Footer/Footer";
import HeaderSearch from "../Header/HeaderSearch/HeaderSearch";

const Basket = () => {
  const { productsInBasket, getBasket } = useContext(basketContext);

  console.log(productsInBasket);

  useEffect(() => {
    getBasket();
  }, []);

  return (
    <>
      <HeaderSearch />
      <Footer />
    </>
  );
};

export default Basket;
