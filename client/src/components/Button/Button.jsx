import React, { useEffect, useState } from "react";
import "./Button.css";

const COLORS = ["color1", "color2", "color3", "color4", "color5"];

export const Button = ({
  hasDynamicColor = false,
  color,
  text,
  ...otherProps
}) => {
  const [buttonColor, setButtonColor] = useState(color ?? COLORS[0]);

  useEffect(() => {
    if (hasDynamicColor) startDynamicColor();
  }, []);

  const startDynamicColor = () => {
    // Set a random color from the list every 1.5s.
    setInterval(() => {
      setButtonColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    }, 1500);
  };

  return (
    <button className={`button ${buttonColor}`} style={{background: color}} {...otherProps}>
      {text}
    </button>
  )
};