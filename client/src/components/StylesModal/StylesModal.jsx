import React from "react";
import { RadioButton } from "../RadioButton/RadioButton";
import { IoIosCloseCircleOutline } from "react-icons/io";

import "./StylesModal.css";

export const StylesModal = ({
  modalRef,
  title,
  content,
  onClose,
  currentStyle,
  onSelectStyle,
}) => {
  return (
    <div className="modal-background">
      <div className="modal" ref={modalRef}>
        <h3 className="modal-title">{title}</h3>
        <div className="modal-content">
          {content?.map(item => 
            <RadioButton value={item} key={item} onChange={(value) => onSelectStyle(value)} checked={currentStyle === item}/>
          )}
        </div>
        <button className="modal-button" onClick={onClose}>Close</button>
      </div>
    </div>
  )
};