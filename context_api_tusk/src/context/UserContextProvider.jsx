import React, { useState } from "react";
import ProductContext from "./ProductContext";

export const UserContextProvider = ({ children }) => {
  const [product, setProduct] = useState(null);
  const [cartItem , setCartItem] = useState([])
  return (
    <ProductContext.Provider value={{ product, setProduct  , cartItem , setCartItem}}>
      {children}
    </ProductContext.Provider>
  );
};
