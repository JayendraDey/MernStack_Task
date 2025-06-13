import React, { useContext, useEffect, useState } from "react";
import style from "./PaymentPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../Redux/cartAction";
const PaymentPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementQuantity(item.id));
    } else {
      dispatch(removeFromCart(item.id));
    }
  };

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.mainContainer}>
      <div className={style.left_div_container}>
        {cart.items?.map((cartitem, i) => {
          return (
            <div className={style.cartItem}>
              <p>{i + 1}</p>
              <img src={cartitem.img} alt="" />
              <div className={style.cartDescriptionDiv}>
                <p className={style.cartDescriptionPrice}>
                  {cartitem.shoeName}
                </p>
                <p>₹{cartitem.price}</p>
                <button
                  onClick={() => dispatch(incrementQuantity(cartitem.id))}
                >
                  +
                </button>
                <p>{cartitem.quantity}</p>
                <button onClick={() => handleDecrement(cartitem)}>-</button>
              </div>
              <div onClick={() => dispatch(removeFromCart(cartitem.id))}>
                XX
              </div>
            </div>
          );
        })}
        <h3 style={{ placeItems: "end" }}>
          Total : ₹{" "}
          {cart.items.reduce(
            (total, item) => total + Number(item.price) * item.quantity,
            0
          )}
        </h3>
      </div>
      <div className={style.right_div_containrer}>
        <div className={style.payment_heading}>
          <h2>Confirm you payment</h2>
        </div>
        <h3 style={{ textDecoration: "underline" }}>
          Total to pay : ₹
          {cart.items.reduce(
            (total, item) => total + Number(item.price) * item.quantity,
            0
          )}
        </h3>
        <div className={style.name_cvv_container}>
          <div>
            <p>owner</p>
            <input type="text" name="" id="" />
          </div>
          <div>
            <p>cvv</p>
            <input type="text" name="" id="" />
          </div>
        </div>
        <div className={style.card_no_div}>
          <p>card no</p>
          <input type="text" name="" id="" />
        </div>
        <div className={style.date_optiondiv}>
          <p>Expiration Date</p>
          <div className={style.data_imgDiv}>
            <div className={style.dateDiv}>
              <select name="" id="">
                <option value="">Jan</option>
                <option value="">Feb</option>
                <option value="">Mar</option>
                <option value="">Apr</option>
                <option value="">May</option>
                <option value="">Jun</option>
                <option value="">Jul</option>
                <option value="">Aug</option>
                <option value="">sep</option>
                <option value="">Oct</option>
                <option value="">Nov</option>
                <option value="">Dec</option>
              </select>
              <select name="" id="">
                <option value="">2024</option>
                <option value="">2025</option>
                <option value="">2026</option>
                <option value="">2027</option>
              </select>
            </div>
            <div className={style.payment_img_div}>
              <img
                src="https://logowik.com/content/uploads/images/upi-unified-payments-interface4949.logowik.com.webp"
                alt=""
              />
              <img
                src="https://th.bing.com/th/id/OIP.IUMnHQByiR4SW6bj4OyAzwHaEo?rs=1&pid=ImgDetMain"
                alt=""
              />
              <img
                src="https://i.pinimg.com/originals/5f/79/a6/5f79a6defe837d721dd2e3b2dba041e1.png"
                alt=""
              />
              <img
                src="https://th.bing.com/th/id/R.136087d60aca6592f8c176ef2666ffed?rik=U17klyazNsjn4g&riu=http%3a%2f%2fwww.hotscams.com%2fwp-content%2fuploads%2f2016%2f03%2fpaypal.jpg&ehk=u1IyS7mKMFvjZRR3yEQV8X1Ed%2bKTAf4lmbAvv02fEVE%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
            </div>
          </div>
        </div>
        <button
          style={{
            width: "70%",
            height: "50px",
            backgroundColor: "orange",
            border: "none",
            outline: "none",
            fontSize: "28px",
            color: "white",
            alignSelf: "center",
          }}
        >
          confirm
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
