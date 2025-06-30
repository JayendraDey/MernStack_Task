import React, { useEffect } from "react";

import styles from "./productDetails.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add_to_cart, selectedProducts } from "../../redux/Actions/ProductAction";
const ProductDetails = () => {
  const eachProduct = useSelector((state)=> state.chooseProduct.product)
  const setCart = useSelector((state)=> state.addCart)
  // console.log(setCart);
  
  const dispatch = useDispatch()

  
  
  const params = useParams();

  const fetchProductByid = async (id) => {
    dispatch(selectedProducts({}))
    const fetchData = await fetch(`https://fakestoreapi.com/products/${id}`);

    const data = await fetchData.json();
   
    dispatch(selectedProducts(data))


    
  };

  useEffect(() => {
    fetchProductByid(params.id);
  }, [params.id]);

  const {id , image ,price , category , description ,title } = eachProduct

 
  return (
    <div className={styles.main_div}>
       <div className={styles.img_div}>
        {image? <img src={image} alt="" /> : <p>Loding .....</p>}
       </div>
       <div className={styles.description_div}>
         <h2 style={{color:"#4a4a4a"}}>{title}</h2>
         <p style={{color:"blue"}}>{category}</p>
         <p style={{fontSize:"18px"}}>{description}</p>
         <h3>${price}</h3>
         <button onClick={()=> dispatch(add_to_cart(eachProduct))}>Add To Cart</button>
         
       </div>
    </div>
  );
};

export default ProductDetails;
