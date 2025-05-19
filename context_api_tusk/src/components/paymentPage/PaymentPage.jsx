import React, { useContext, useEffect, useState } from "react";
import {NavLink} from "react-router-dom"
import style from "./PaymentPage.module.css";
import ProductContext from "../../context/ProductContext";
const PaymentPage = () => {
  const { product, setProduct, cartItem, setCartItem } =
    useContext(ProductContext);

  useEffect(() => {
    cartItem.map((item) => {
      if (item.quantity === 0) {
        setCartItem((prev) => prev.filter((it) => it.id !== item.id));
      }
    });
  }, [cartItem]);

  const updateQuantity = (action, id) => {
    setCartItem((prev) =>
      prev.map((item) => {
        if (item.id === id && action === "+") {
          return { ...item, quantity: item.quantity + 1 };
        } else if (item.id === id && action === "-") {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const DeleteItem = (id) => {
    setCartItem((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={style.right_div_container}>
      {cartItem?.map((cartitem, i) => {
        return (
          <div className={style.cartItem}>
            <p>{i + 1}</p>
            <img src={cartitem.img} alt="" />
            <div className={style.cartDescriptionDiv}>
              <p className={style.cartDescriptionPrice}>{cartitem.shoeName}</p>
              <p>₹{cartitem.price}</p>
              <button onClick={() => updateQuantity("+", cartitem.id)}>
                +
              </button>
              <p>{cartitem.quantity}</p>
              <button onClick={() => updateQuantity("-", cartitem.id)}>
                -
              </button>
            </div>
            <div onClick={() => DeleteItem(cartitem.id)}>XX</div>
          </div>
        );
      })}
      <h3 style={{ placeItems: "end" }}>
        Total : ₹{" "}
        {cartItem.reduce(
          (total, item) => total + Number(item.price) * item.quantity,
          0
        )}
      </h3>
    </div>
  );
};

export default PaymentPage;




