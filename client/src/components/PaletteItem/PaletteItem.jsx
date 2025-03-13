import React, { useRef } from 'react';
import { SideButton } from '../SideButton/SideButton';
import { RxSymbol, RxLockClosed } from "react-icons/rx";

import './PaletteItem.css';

export const PaletteItem = ({
  index,
  color,
  onClickRefresh,
  onClickColor,
  onClickLock
}) => {
  const itemColorRef = useRef(null);

  const handleClickColor = () => {
    if (itemColorRef.current) {
      const boundingRect = itemColorRef.current.getBoundingClientRect();
      onClickColor(index, color.hexValue, boundingRect);
    }
  }

  return (
    <div className="item-row">
      <SideButton direction='left' icon={<RxSymbol size={24} onClick={() => onClickRefresh(index)}/>}/>
      <div className="item-color" ref={itemColorRef} style={{backgroundColor: color.hexValue}} onClick={handleClickColor}></div>
      <SideButton direction='right' icon={<RxLockClosed size={24} onClick={() => onClickLock(index)}/>}/>
      <span className="item-text">{color.associatedItem}</span>
    </div>
  )
};