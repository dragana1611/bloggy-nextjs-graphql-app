import React from "react";
import styles from "../styles/Button.module.css";

const Button = () => {
  return (
    <div className={styles.btnContainer}>
      <div className={`${styles.button} ${styles.buttonB}`}>
        <div className={styles.glowback}></div>
        <div className={styles.glowfront}></div>
        <div className={styles.twinklewhite}></div>
        <div className={styles.twinklecolor}></div>
        <div className={styles.reflectiontop}></div>
        <div className={styles.reflectionbottom}></div>
        <div className={styles.shine}></div>
        <div className={styles.shineshadowR}></div>
        <span className={styles.text}>&#8592; Home</span>
      </div>
    </div>
  );
};

export default Button;
