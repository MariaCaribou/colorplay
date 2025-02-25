import React from "react";
import { LuRefreshCw } from "react-icons/lu";
import { MdLock } from "react-icons/md";

import "./SideButton.css";

const ICONS = {
  'refresh': <LuRefreshCw size={24} />,
  'locked': <MdLock size={24} />
}

export const SideButton = ({
  direction,
  icon
}) => {
  return (
    <button className={direction ? `side-button side-button--${direction}` : 'side-button'}>
      {ICONS[icon]}
    </button>
  )
};