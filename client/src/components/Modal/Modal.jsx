import React from "react";
import { RadioButton } from "../RadioButton/RadioButton";
import { IoIosCloseCircleOutline } from "react-icons/io";

import "./Modal.css";


export const Modal = ({
  title,
  content,
  onClose,
}) => {

  return (
    <div className="modal">
      <div className="modal-close" onClick={onClose}><IoIosCloseCircleOutline size={48} /></div>
      <h3 className="modal-title">{title}</h3>
      <ul className="modal-content">
        {content?.map(item => 
          <RadioButton text={item}/>
        )}
      </ul>
    </div>
  )
};