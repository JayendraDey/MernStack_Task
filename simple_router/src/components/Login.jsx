import React from "react";

import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.loginMain_div}>
      <div className={styles.login_div}>
        <h2 style={{color:"blue" , textDecoration:"underline"}}>Login</h2>
        <div className={styles.email_inp}>
          <label htmlFor="">Email</label>
          <input type="text" name="" id="" />
        </div>
        <div className={styles.password_inp}>
          <label htmlFor="">Password</label>
          <input type="text" name="" id="" />
        </div>
        <div className={styles.login_button}>Login</div>
      </div>
    </div>
  );
};

export default Login;
