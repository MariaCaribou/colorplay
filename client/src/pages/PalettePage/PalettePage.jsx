import React, { useEffect, useState } from "react";
import { SideButton } from "../../components/SideButton/SideButton";
import { Button } from "../../components/Button/Button";
import { StylesModal } from "../../components/StylesModal/StylesModal";

import "./PalettePage.css";

import { fetchPalette } from "../../utils/api";

const STYLE_OPTIONS = ['Contrast', 'Gradient', 'Eclectic', 'Pastel'];
const ITEMS = [ 'TOP', 'BOTTOM', 'SHOES', 'ACCESORIES' ];
const PALETTE_OBJECT = [
  { hexValue: '#F5F5F5', associatedItem: ITEMS[0] },
  { hexValue: '#EAEAEA', associatedItem: ITEMS[1] },
  { hexValue: '#DADADA', associatedItem: ITEMS[2] },
  { hexValue: '#CFCFCF', associatedItem: ITEMS[3] },
  { hexValue: '#BFBFBF', associatedItem: '' },
  { hexValue: '#B0B0B0', associatedItem: '' }
];

export const PalettePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPalette, setCurrentPalette] = useState(PALETTE_OBJECT);

  useEffect(() => {
    retrievePalette();
  }, []);

  const retrievePalette = async() => {
    const { palette } = await(fetchPalette());

    const newPalette = currentPalette.map((color, index) => ({
      ...color,
      hexValue: palette[index]
    }));

    setCurrentPalette(newPalette);
  };

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
        {currentPalette?.map(color => {
          if (color.associatedItem !== '') {
            return (
              <div className="item-row" key={color.hexValue}>
                <SideButton direction='left' icon='refresh'/>
                <div className="item-color" style={{backgroundColor: color.hexValue}}></div>
                <SideButton direction='right' icon='locked'/>
                <span className="item-text">{color.associatedItem}</span>
              </div>
            );
            return null;
          }
        })}
      </div>

      <h2 className="section-title">YOUR PALETTE</h2>
      <div className="palette">
        {currentPalette?.map(color =>
          <div className="palette-item" style={{backgroundColor: color.hexValue}} key={color.hexValue}></div>
        )}
      </div>

      <div className="button-wrapper">
        <Button handleOnClick={openModal} color={"#9381FF"} text={"Styles"}/>
      </div>
      
      {isModalOpen &&
        <StylesModal 
          title="Choose your style"
          content={STYLE_OPTIONS}
          onClose={closeModal}
        />
      }
    </>
  )
};