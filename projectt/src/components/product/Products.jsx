import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Product.module.css";
import { setProducts } from "../../redux/Actions/ProductAction";
import { NavLink } from "react-router-dom";

const Products = () => {
  const product = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  console.log(product);
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
     
      
      dispatch(setProducts(data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.products_div} >
      {product?.map((item) => {
        return (
          <NavLink to={`/product/${item.id}`} style={{textDecoration:"none"}} >
          <div className={styles.card_div} key={item.id} >
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p>$ {item.price}</p>
          </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Products;
