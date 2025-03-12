import React, { useEffect, useState } from 'react';
import './Button.css';

const COLORS = ['#e86d5f', '#2ecc71', '#f1c40f', '#9b59b6', '#1abc9c'];

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

  // Set a random color from the list every 1s.
  const startDynamicColor = () => {
    setInterval(() => {
      setButtonColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    }, 1000);
  };

  return (
    <button className="button" style={{background: buttonColor}} {...otherProps}>
      {text}
    </button>
  )
};