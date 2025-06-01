import React from "react";

import CircleButton from "./CircleButton";

export default function SlidePrevButton({
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
        marginLeft: 40,
        border: "none",
        backgroundColor: "white",
      }}
      direction={"left"}
      onClick={onClick}
    />
  );
}
