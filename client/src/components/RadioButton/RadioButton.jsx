import React from "react";
import "./RadioButton.css";

export const RadioButton = ({
  value,
}) => {
  return (
    <div className="item">
      <input className="item-button" type="radio" id={value} name="style" value={value}/>
      <label htmlFor={value} className="item-text">{value}</label>  
    </div>
  )
};