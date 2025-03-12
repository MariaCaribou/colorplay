import React from 'react';
import './RadioButton.css';

export const RadioButton = ({
  value,
  onChange,
  ...otherProps
}) => {
  const handleChange = (event) => {
    if (onChange) onChange(event.target.value);
  };

  return (
    <div className="item">
      <input className="item-button" 
        type="radio" 
        id={value} 
        name="style" 
        value={value} 
        onChange={handleChange}
        {...otherProps}
      />
      <label htmlFor={value} className="item-text">{value}</label>  
    </div>
  )
};