import React from "react";
import styles from "./styles.module.scss";

function Lines() {
  return (
    <div className={styles.line__container}>
      <div className={styles.line + " " + styles.line__horizontal} />
      <div className={styles.line + " " + styles.line__vertical} />
    </div>
  );
}

export default Lines;
