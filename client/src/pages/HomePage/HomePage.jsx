import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";

import "./HomePage.css";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/palette");
  };

  return (
    <div className="main">
      <p className="main__text">Let's find out your colors for today</p>
      <Button onClick={handleNavigate} hasDynamicColor={true} text={"Start"}/>
    </div>
  )
};