import React from "react";
import styles from "./styles.module.scss";

function PageTitle({ title }: { title: string }) {
  return (
    <section className={styles.title__container}>
      <span className={styles.gradientRectangle}></span>
      <h1 className={styles.title}>{title}</h1>
    </section>
  );
}

export default PageTitle;
