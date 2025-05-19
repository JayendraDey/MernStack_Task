import React from "react"

import styles from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header =()=> {
    return (
        <div className={styles.header_container}>
            <h2>Logo</h2>
            <NavLink style={{color:"white",textDecoration:"none"}} to={"/"}><p>Home</p></NavLink>
            <p>Category</p>
            <p>About Us</p>
        </div>
   )

}


export default Header












