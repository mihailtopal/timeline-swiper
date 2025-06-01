import React from "react";
import styles from "./styles.module.scss";

type TimePointProps = {
  x: number;
  y: number;
  index: number;
  isActive: boolean;
  handleChangeActivePoint: (id: number) => void;
  rotationAngle: number;
  theme: string;
};

function TimePoint({
  x,
  y,
  index,
  isActive,
  handleChangeActivePoint,
  rotationAngle,
  theme,
}: TimePointProps) {
  const pointClass = isActive
    ? `${styles.point} ${styles.point__active}`
    : styles.point;
  const numberClass = isActive
    ? `${styles.point__number} ${styles.point__number__active}`
    : styles.point__number;

  return (
    <button
      className={styles.point__container}
      onClick={() => handleChangeActivePoint(index)}
    >
      <span className={pointClass} style={{ top: -y, left: x }}>
        <span
          className={numberClass}
          style={{
            transform: `translate(-50%, -50%) rotate(${-rotationAngle}deg)`,
            transition: "transform 0.6s ease-in-out",
          }}
        >
          {index + 1}
          <span className={styles.pointDescription}>{theme}</span>
        </span>
      </span>
    </button>
  );
}

export default TimePoint;
