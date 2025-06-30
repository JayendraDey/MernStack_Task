import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_from_cart } from "../../redux/Actions/ProductAction";

const Cart = () => {

    const [totalAmount , setTotalAmount] = useState(null)

  
  const setCart = useSelector((state) => state.addCart);
  const dispatch = useDispatch()
  console.log(setCart);
 
    useEffect(() => {
        const total = setCart.reduce((acc, item) => acc + Number(item.price), 0);
        setTotalAmount(total);
    }, [setCart]);

 

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        width: "100%",
        height: "80vh",
        gap: "20px",
        overflow : "scroll"
      }}
    >
      {setCart.map((item, i) => {
        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "70%",
              height: "100px",
            //   backgroundColor: "skyblue",
              gap: "20px",
            }}
          >
            <p>{i + 1}</p>
            <img
              style={{ width: "100px", height: "100%" }}
              src={item.image}
              alt=""
            />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button onClick={()=> dispatch(delete_from_cart(item.id))}>Delete</button>
          </div>
        );
      })}
    <h2>{totalAmount ? <h2>Total: ${totalAmount}</h2>  : ""}</h2>
    </div>
  );
};

export default Cart;
