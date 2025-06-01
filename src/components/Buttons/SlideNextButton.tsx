import React from "react";
import CircleButton from "./CircleButton";

export default function SlideNextButton({
  onClick,
  disabled = false,
}: {
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <CircleButton
      diameter={40}
      arrowSize={12}
      arrowColor={"var(--gradient-blue)"}
      style={{
        visibility: disabled ? "hidden" : "visible",
        marginRight: 40,
        border: "none",
        backgroundColor: "white",
      }}
      onClick={onClick}
    />
  );
}
