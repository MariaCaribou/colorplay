import React, { useRef } from 'react';
import { SideButton } from '../SideButton/SideButton';
import { LuRefreshCw } from 'react-icons/lu';
import { MdLock } from 'react-icons/md';

import './PaletteItem.css';

export const PaletteItem = ({
  index,
  color,
  onClickRefresh,
  onClickColor
}) => {
  const itemColorRef = useRef(null);

  const handleClick = () => {
    if (itemColorRef.current) {
      const boundingRect = itemColorRef.current.getBoundingClientRect();
      onClickColor(index, color.hexValue, boundingRect);
    }
  }

  return (
    <div className="item-row">
      <SideButton direction='left' icon={<LuRefreshCw size={24} onClick={() => onClickRefresh(index)}/>}/>
      <div className="item-color" ref={itemColorRef} style={{backgroundColor: color.hexValue}} onClick={handleClick}></div>
      <SideButton direction='right' icon={<MdLock size={24} />}/>
      <span className="item-text">{color.associatedItem}</span>
    </div>
  )
};