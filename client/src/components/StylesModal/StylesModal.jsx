import React from "react";
import { RadioButton } from "../RadioButton/RadioButton";
import { IoIosCloseCircleOutline } from "react-icons/io";

import "./StylesModal.css";

export const StylesModal = ({
  title,
  content,
  onClose,
}) => {
  const onSubmit = () => {
    console.log('submited');
  };

  return (
    <div className="modal">
      <div className="modal-close" onClick={onClose}><IoIosCloseCircleOutline size={48} /></div>
      <h3 className="modal-title">{title}</h3>
      <form className="modal-content" action="">
        {content?.map(item => 
          <RadioButton value={item} key={item}/>
        )}
        <button className="modal-button" onClick={() => onSubmit()}>Accept</button>
      </form>
    </div>
  )
};