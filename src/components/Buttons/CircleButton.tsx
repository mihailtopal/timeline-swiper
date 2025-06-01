import React from "react";
import styles from "./styles.module.scss";
import { ArrowIcon } from "./ArrowIcon";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  direction?: "left" | "right";
  diameter?: number;
  arrowColor?: string;
  arrowSize?: number;
  ref?: any;
};

const CircleButton: React.FC<Props> = ({
  direction = "right",
  diameter,
  arrowColor,
  arrowSize,
  ref,
  ...props
}) => {
  return (
    <button
      ref={ref}
      className={styles.button}
      {...props}
      style={{
        rotate: direction === "right" ? "180deg" : "0",
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
