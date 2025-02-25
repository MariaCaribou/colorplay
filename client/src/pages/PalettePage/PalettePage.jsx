import React, { useState } from "react";
import { SideButton } from "../../components/SideButton/SideButton";

import "./PalettePage.css";
import { Button } from "../../components/Button/Button";
import { Modal } from "../../components/Modal/Modal";

const ITEMS = [
  'TOP',
  'BOTTOM',
  'SHOES',
  'ACCESORIES',
];

const PALETTE_ITEMS = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6'];

const STYLE_OPTIONS = ['Contrast', 'Gradient', 'Eclectic', 'Pastel'];

export const PalettePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="randomize-all">
        <span className="randomize-text">RANDOMIZE ALL</span>
        <SideButton direction='right' icon='refresh'/>
      </div>

      <h2 className="section-title">SELECT BY ITEM</h2>
      <div className="items">
        {ITEMS.map(item => (
          <div className="item-row" key={item}>
            <SideButton direction='left' icon='refresh'/>
            <div className="item-color"></div>
            <SideButton direction='right' icon='locked'/>
            <span className="item-text">{item}</span>
          </div>
        ))}
      </div>

      <h2 className="section-title">YOUR PALETTE</h2>
      <div className="palette">
        {PALETTE_ITEMS.map(item =>
          <div className={`palette-item ${item}`}></div>
        )}
      </div>

      <div className="button-wrapper">
        <Button handleOnClick={openModal} color={"#9A8C98"} text={"Styles"}/>
      </div>
      
      {isModalOpen &&
        <Modal 
          title="Choose your style"
          content={STYLE_OPTIONS}
          onClose={closeModal}
        />
      }
    </>
  )
};