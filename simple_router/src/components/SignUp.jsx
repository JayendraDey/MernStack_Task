import React from "react";

import styles from "./signUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.loginMain_div}>
      <div className={styles.login_div}>
        <h2 style={{ color: "blue", textDecoration: "underline" }}>SignUp</h2>
        <div className={styles.name_inp}>
          <label htmlFor="">Name</label>
          <input type="text" name="" id="" />
        </div>
        <div className={styles.email_inp}>
          <label htmlFor="">Email</label>
          <input type="text" name="" id="" />
        </div>
        <div className={styles.password_inp}>
          <label htmlFor="">Password</label>
          <input type="text" name="" id="" />
        </div>
        <div className={styles.login_button}>SignUp</div>
      </div>
    </div>
  );
};

export default SignUp;
