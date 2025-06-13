import Header from "./components/header/Header";

import style from "./App.module.css";
import LefTDiv from "./components/bodyLeftDiv/LefTDiv";
import RightDiv from "./components/bodyRightDiv/RightDiv";
import { useState } from "react";


import { Route, Routes } from "react-router-dom";
import PaymentPage from "./components/paymentPage/PaymentPage";

function App() {
  const [cartItem, setCartItem] = useState([]);

  return (
    <>
      <Header />
      <Routes>
        
        <Route
          path="/"
          element={
            <div className={style.bodydiv}>
              <LefTDiv setCartItem={setCartItem} cartItem={cartItem} />
              <RightDiv cartItem={cartItem} setCartItem={setCartItem} />
            </div>
          }
        />

       
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </>
  );
}

export default App;
