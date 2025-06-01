import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

function Period({ label }: { label: string }) {
  const [startLabel, endLabel] = label.split(" ").map(Number);
  const [firstDate, setFirstDate] = useState(startLabel);
  const [secondDate, setSecondDate] = useState(endLabel);

  useEffect(() => {
    let currentFirst = firstDate;
    let currentSecond = secondDate;

    const totalSteps = Math.max(
      Math.abs(startLabel - firstDate),
      Math.abs(endLabel - secondDate),
    );

    if (totalSteps === 0) return;

    // Интервал анимации смен дат
    const interval = setInterval(() => {
      let updated = false;

      if (currentFirst !== startLabel) {
        currentFirst += startLabel > currentFirst ? 1 : -1;
        setFirstDate(currentFirst);
        updated = true;
      }

      if (currentSecond !== endLabel) {
        currentSecond += endLabel > currentSecond ? 1 : -1;
        setSecondDate(currentSecond);
        updated = true;
      }

      if (!updated) clearInterval(interval);
    }, 500 / totalSteps);

    return () => clearInterval(interval);
  }, [label]);

  return (
    <div className={styles.period__container}>
      <time className={styles.firstDate}>{firstDate}</time>
      <time className={styles.secondDate}>{secondDate}</time>
    </div>
  );
}

export default Period;
