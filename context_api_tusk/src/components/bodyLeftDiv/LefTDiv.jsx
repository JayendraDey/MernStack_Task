import React, { useContext, useEffect } from "react";

import style from "./LeftDiv.module.css";
import { shoeApi } from "../ShoeApi";
import ProductContext from "../../context/ProductContext";

const LefTDiv = () => {
  const {product , setProduct , cartItem , setCartItem} = useContext(ProductContext)

   useEffect(() => {
    setProduct(shoeApi);

  }, [setProduct]);

  console.log(product)
  
  const setCartitemss = (id) => {
    product?.map((item) => {
      if (item.id === id) {
        setCartItem((prev) => {
          const isAlreadyInCart = prev.some((cartItem) => cartItem.id === item.id);
          if (!isAlreadyInCart) {
            return [...prev, item];
          }
          return prev;
        });
      }
    });
  };

  return (
    <div className={style.left_div}>
      {product?.map((item) => {
        return (
          <div key={item.id} className={style.shoeCard}>
            <img src={item.img} alt="shoe" />
            <div className={style.description_div}>
              <h3>{item.shoeName}</h3>
              <h3> ₹ {item.price}</h3>
              <button onClick={() => setCartitemss(item.id)}>
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LefTDiv;
