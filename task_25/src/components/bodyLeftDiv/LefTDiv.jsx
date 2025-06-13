import React, {  useState } from "react";

import style from "./LeftDiv.module.css";
import { shoeApi } from "../ShoeApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartAction";


const LefTDiv = () => {
  const  [product , setProduct] = useState(shoeApi)
   const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
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
              <button onClick={()=> handleAddToCart(item)}>
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
