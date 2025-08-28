import React from "react";
import styles from "./styles.module.scss";
import { ArrowIcon } from "./ArrowIcon";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  direction?: "left" | "right";
  diameter?: number;
  arrowColor?: string;
  arrowSize?: number;
};

const CircleButton: React.FC<Props> = ({
  direction = "right",
  diameter,
  arrowColor,
  arrowSize,
  ...props
}) => {
  return (
    <button
      className={styles.button}
      {...props}
      style={{
        rotate: direction === "right" ? "180deg" : "10deg",
        width: diameter || 50,
        height: diameter || 50,
        ...props.style,
      }}
    >
      <ArrowIcon color={arrowColor} size={arrowSize} />
    </button>
  );
};

export default CircleButton;
