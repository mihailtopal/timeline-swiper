import React, { useEffect, useState } from "react";
import Circle from "../BackgroundLines/Circle";
import TimePoint from "../TimePoint/TimePoint";
import { CIRCLE_RADIUS } from "../../variables";
import styles from "./styles.module.scss";
import { TimelinePeriod } from "../../mock/timelineData";

const getPointerCoords = (index: number, count: number) => {
  const angle = 360 / count;
  const rad = angle * (index + 1) * (Math.PI / 180);
  const x = Math.cos(rad) * CIRCLE_RADIUS;
  const y = Math.sin(rad) * CIRCLE_RADIUS;
  return { x, y };
};

type TimeCircleProps = {
  setActiveIndex: (index: number) => void;
  activeIndex: number;
  pointers: TimelinePeriod[];
};

function TimeCircle({
  setActiveIndex,
  activeIndex,
  pointers,
}: TimeCircleProps) {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    if (!pointers.length) return;

    const step = 360 / pointers.length;
    const targetAngle = activeIndex * step;
    let diff = targetAngle - (rotationAngle % 360);

    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;

    setRotationAngle((prev) => prev + diff);
  }, [activeIndex, pointers.length]);

  return (
    <div
      className={styles.timeCircle}
      style={{
        transform: `translate(-50%, -50%) rotate(${rotationAngle}deg)`,
      }}
    >
      <Circle />
      {pointers.map((pointer, index) => {
        const { x, y } = getPointerCoords(index, pointers.length);
        return (
          <TimePoint
            key={pointer.theme}
            x={x}
            y={y}
            index={index}
            theme={pointer.theme}
            isActive={index === activeIndex}
            handleChangeActivePoint={setActiveIndex}
            rotationAngle={rotationAngle}
          />
        );
      })}
    </div>
  );
}

export default TimeCircle;
