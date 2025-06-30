import React from "react";
import { useSelector } from "react-redux";
import Products from "../product/Products";
import { Outlet } from "react-router-dom";
import { BsDisplay } from "react-icons/bs";


const HomePage = () => {
  const product = useSelector((state) => state.allProducts.products);
   
  // .element::-webkit-scrollbar {
  //   display: none;
  // }

  
  console.log(product);
  return (
    <div>
     
     <Products/>
     
    </div>
  );
};

export default HomePage;
