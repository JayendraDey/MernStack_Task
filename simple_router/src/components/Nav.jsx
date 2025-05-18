import React from "react";

import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className={styles.navMainDiv}>
      <NavLink to={"/dashBord"} className={styles.logo}>
         <img src="https://www.logodesign.net/logo-new/text-in-vintage-banner-9393ld.png" alt="" />
      </NavLink>
      <NavLink to={"/"} className={styles.home}>Home</NavLink>
      <div className={styles.Login_signup_div}>
        <NavLink to={"/login"} className={styles.login}>Login</NavLink>
        <NavLink to={"/signup"} className={styles.signup}> SignUp</NavLink>
      </div>
    </div>
  );
};

export default Nav;
