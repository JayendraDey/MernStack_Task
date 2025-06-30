import { configureStore } from "@reduxjs/toolkit";
import { add_cart, chooseProductReducer, productReducer } from "./reducer/productReducer";


export const store = configureStore({
    reducer: {
      allProducts: productReducer,
      chooseProduct : chooseProductReducer,
      addCart : add_cart
    },
   
  });









