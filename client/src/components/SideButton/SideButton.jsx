import React from 'react';

import './SideButton.css';

export const SideButton = ({
  direction,
  icon,
  ...otherProps
}) => {
  return (
    <button className={direction ? `side-button side-button--${direction}` : 'side-button'} {...otherProps}>
      {icon}
    </button>
  )
};