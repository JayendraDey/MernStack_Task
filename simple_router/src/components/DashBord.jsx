import React from "react";

import styles from "./dashBord.module.css";
export const DashBord = () => {
  return (
    <div className={styles.dashBord_mainContainer}>
      <div className={styles.leftdiv}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.rightdiv}></div>
    </div>
  );
};
