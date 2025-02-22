import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const COLORS = ["color1", "color2", "color3", "color4", "color5"];

export const HomePage = () => {
  const navigate = useNavigate();
  const [buttonColor, setButtonColor] = useState(COLORS[0]);

  useEffect(() => {
    changeButtonColor();
  }, []);

  const changeButtonColor = () => {
    // Set a random color from the list every 1.5s.
    setInterval(() => {
      setButtonColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    }, 1500);
  };

  const handleOnClick = () => {
    navigate("/palette");
  };

  return (
      <div className="main">
        <p className="main__text">Let's find out your colors for today</p>
        <button className={`main__button ${buttonColor}`} onClick={() => handleOnClick()}>Start</button>
      </div>
  )
};