import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./RightDiv.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../Redux/cartAction";
const RightDiv = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(cart.items);

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementQuantity(item.id));
    } else {
      dispatch(removeFromCart(item.id));
    }
  };

  return (
    <div className={style.right_div_container}>
      {cart.items?.map((cartitem, i) => {
        return (
          <div className={style.cartItem}>
            <p>{i + 1}</p>
            <img src={cartitem.img} alt="" />
            <div className={style.cartDescriptionDiv}>
              <p className={style.cartDescriptionPrice}>{cartitem.shoeName}</p>
              <p>₹{cartitem.price}</p>
              <button onClick={() => dispatch(incrementQuantity(cartitem.id))}>
                +
              </button>
              <p>{cartitem.quantity}</p>
              <button onClick={() => handleDecrement(cartitem)}>-</button>
            </div>
            <div onClick={()=> dispatch(removeFromCart(cartitem.id))}>XX</div>
          </div>
        );
      })}
      <h3 style={{ placeItems: "end" }}>
        Total : ₹{" "}
        {cart.items?.reduce(
          (total, item) => total + Number(item.price) * item.quantity,
          0
        )}
      </h3>
      <NavLink to={"/payment"}>
        {" "}
        <button
          style={{
            width: "150px",
            height: "50px",
            alignSelf: "center",
            border: "none",
            outline: "none",
            backgroundColor: "#6363ee",
            color: "white",
            borderRadius: "10px",
            fontSize: "15px",
          }}
        >
          Proceed To Payment
        </button>
      </NavLink>
    </div>
  );
};

export default RightDiv;
