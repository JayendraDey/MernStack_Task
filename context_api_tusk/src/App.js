import Header from "./components/header/Header";

import style from "./App.module.css";
import LefTDiv from "./components/bodyLeftDiv/LefTDiv";
import RightDiv from "./components/bodyRightDiv/RightDiv";
import { useState } from "react";
import { UserContextProvider } from "./context/UserContextProvider";


import { Route, Routes } from 'react-router-dom';
import PaymentPage from "./components/paymentPage/PaymentPage";

function App() {
  const [cartItem, setCartItem] = useState([]);

  return (
      <UserContextProvider>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className={style.bodydiv}>
              <LefTDiv setCartItem={setCartItem} cartItem={cartItem} />
              <RightDiv cartItem={cartItem} setCartItem={setCartItem} />
            </div>
          }
        />

        {/* Payment Page */}
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </UserContextProvider>
   
  );
}

export default App;
