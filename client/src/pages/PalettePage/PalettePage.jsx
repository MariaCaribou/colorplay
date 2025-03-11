import React, { useCallback, useEffect, useRef, useState } from "react";
import { SideButton } from "../../components/SideButton/SideButton";
import { Button } from "../../components/Button/Button";
import { StylesModal } from "../../components/StylesModal/StylesModal";
import { FaPaintBrush } from "react-icons/fa";

import "./PalettePage.css";

import { fetchPalette, fetchPaletteColor } from "../../utils/api";
import { PaletteItem } from "../../components/PaletteItem/PaletteItem";
import { HexColorPicker } from "react-colorful";
import useClickOutside from "../../utils/useClickOutside";

const STYLE_OPTIONS = ['contrast', 'pastel', 'monochromatic', 'eclectic'];
const ITEMS = [ 'Top', 'Bottom', 'Shoes', 'Accesories' ];
const PALETTE_OBJECT = [
  { hexValue: '#F5F5F5', associatedItem: ITEMS[0], isLocked: false },
  { hexValue: '#EAEAEA', associatedItem: ITEMS[1], isLocked: false },
  { hexValue: '#DADADA', associatedItem: ITEMS[2], isLocked: false },
  { hexValue: '#CFCFCF', associatedItem: ITEMS[3], isLocked: false },
  { hexValue: '#BFBFBF', associatedItem: '' },
  { hexValue: '#B0B0B0', associatedItem: '' }
];

export const PalettePage = () => {
  const [currentPalette, setCurrentPalette] = useState(PALETTE_OBJECT);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStyle, setCurrentStyle] = useState(STYLE_OPTIONS[0]);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  const openColorPicker = () => {
    setIsColorPickerOpen(true);
  };

  const closeColorPicker = useCallback(() => {
    setIsColorPickerOpen(false)
  }, []);
  
  const colorPicker = useRef();
  useClickOutside(colorPicker, closeColorPicker);

  // Refresh the palette when rendering this component for the first time.
  useEffect(() => {
    refreshPalette();
  }, []);

  useEffect(() => {
    refreshPalette();
  }, [currentStyle]);
  
  // Refresh the whole palette.
  const refreshPalette = async() => {
    const palette = await fetchPalette(currentStyle);

    const newPalette = currentPalette.map((color, index) => ({
      ...color,
      hexValue: palette[index]
    }));

    setCurrentPalette(newPalette);
  };

  // Refresh just one color of the palette.
  const refreshItemColor = async (itemIndex) => {
    const newColor  = await fetchPaletteColor(currentStyle, currentPalette, itemIndex);

    // Only update the item with the specified index.
    const newPalette = currentPalette.map((item, index) => (
      index === itemIndex ? { ...item, hexValue: newColor } : item
    ));

    setCurrentPalette(newPalette); 
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="palette-page">
      <div className="randomize-all">
        <span className="randomize-text">Select style</span>
        <SideButton direction='right' icon={<FaPaintBrush size={24}/>} onClick={() => openModal()}/>
      </div>

      <h2 className="section-title">Select by item</h2>
      <div className="items">
        {/* Only render those palette items that have an associated item. */}
        {currentPalette.filter(color => color.associatedItem !== '')?.map((color, index) => (
          <PaletteItem key={index} index={index} color={color} onClickRefresh={refreshItemColor} onClickColor={openColorPicker} />
        ))}
      </div>

      <h2 className="section-title">Your palette</h2>
      <div className="palette">
        {currentPalette?.map((color, index) =>
          <div className="palette-item" style={{backgroundColor: color.hexValue}} key={index}></div>
        )}
      </div>

      <div className="button-wrapper">
        <Button color="#9381FF" text="Refresh" onClick={() => refreshPalette()}/>
      </div>
      
      {isModalOpen &&
        <StylesModal 
          title="Choose your style"
          content={STYLE_OPTIONS}
          onClose={closeModal}
          currentStyle={currentStyle}
          onSelectStyle={(style) => setCurrentStyle(style)}
        />
      }

      {isColorPickerOpen &&
        <div className="color-picker" ref={colorPicker}>
          <HexColorPicker />
        </div>
      }
    </div>
  )
};