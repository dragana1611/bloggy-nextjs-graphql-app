import React from "react";
import styles from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.L}>L</div>
      <div className={styles.outter}>
        <div className={styles.mid}></div>
      </div>
      <div className={styles.ADING}>ADING</div>
    </div>
  );
};

export default Loader;
