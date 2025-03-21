import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SideButton } from '../../components/SideButton/SideButton';
import { Button } from '../../components/Button/Button';
import { StylesModal } from '../../components/StylesModal/StylesModal';
import { RxShadow } from "react-icons/rx";

import './PalettePage.css';

import { fetchPalette, fetchPaletteColor } from '../../utils/api';
import { PaletteItem } from '../../components/PaletteItem/PaletteItem';
import { HexColorPicker } from 'react-colorful';
import { PALETTE, STYLE_OPTIONS } from '../../utils/constants';
import useClickOutside from '../../utils/useClickOutside';

export const PalettePage = () => {
  const [currentPalette, setCurrentPalette] = useState(PALETTE);
  const [currentStyle, setCurrentStyle] = useState(STYLE_OPTIONS[0]);
  const [pickedColor, setPickedColor] = useState({ index: 0, hexValue: "", boundingRect: null });

  // Styles modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const stylesModal = useRef();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false)

  useClickOutside(stylesModal, closeModal);

  // Color picker
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const colorPicker = useRef();

  const openColorPicker = () => setIsColorPickerOpen(true);
  const closeColorPicker = useCallback(() => setIsColorPickerOpen(false), []);
  
  useClickOutside(colorPicker, closeColorPicker);

  // Refresh the palette when rendering this component for the first time.
  useEffect(() => {
    refreshPalette();
  }, []);

  // Refresh the palette when the style changes.
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
    const newHexValue  = await fetchPaletteColor(currentStyle, currentPalette, itemIndex);
    setPaletteColor(itemIndex, newHexValue);
  };

  // Toggle locking/unlocking a color from the palette.
  const toggleLockItemColor = (itemIndex) => {
  };

  // Only update the item with the specified index.
  const setPaletteColor = (itemIndex, newHexValue) => {
    const newPalette = currentPalette.map((item, index) => (
      index === itemIndex ? { ...item, hexValue: newHexValue } : item
    ));

    setCurrentPalette(newPalette); 
  };

  // Callback executed when an item is clicked, opening the color picker.
  const handleClickPaletteColor = (index, hexValue, boundingRect) => {
    setPickedColor({ index, hexValue, boundingRect });
    openColorPicker();
  };

  // Callback executed when a color is picked in the color picker.
  const handleColorPickerChange = (hexValue) => {
    setPickedColor({ ...pickedColor, hexValue });
    setPaletteColor(pickedColor?.index, hexValue);
  };

  return (
    <div className="palette-page">
      <div className="select-style">
        <span className="select-style-text">Select style</span>
        <SideButton direction='right' icon={<RxShadow size={24}/>} onClick={() => openModal()}/>
      </div>

      <h2 className="section-title">Select by item</h2>
      <div className="items">
        {/* Only render those palette items that have an associated item. */}
        {currentPalette.filter(color => color.associatedItem !== '')?.map((color, index) => (
          <PaletteItem
            key={index}
            index={index}
            color={color}
            onClickRefresh={refreshItemColor}
            onClickColor={handleClickPaletteColor}
            onClickLock={toggleLockItemColor}/>
        ))}
      </div>

      <h2 className="section-title">Your palette</h2>
      <div className="palette">
        {currentPalette?.map((color, index) =>
          <div className="palette-item" style={{backgroundColor: color.hexValue}} key={index}></div>
        )}
      </div>

      <div className="button-wrapper">
        <Button color="#E4D3C8" text="Refresh" onClick={() => refreshPalette()}/>
      </div>
      
      {isModalOpen &&
        <StylesModal
          modalRef={stylesModal}
          title="Choose your style"
          content={STYLE_OPTIONS}
          onClose={closeModal}
          currentStyle={currentStyle}
          onSelectStyle={(style) => setCurrentStyle(style)}
        />
      }

      {isColorPickerOpen &&
        <div
          className="color-picker"
          ref={colorPicker}
          style={{
            top: `${pickedColor?.boundingRect.bottom + window.scrollY}px`,
            left: `${pickedColor?.boundingRect.left}px`
          }}>
            <HexColorPicker color={pickedColor?.hexValue} onChange={handleColorPickerChange} />
        </div>
      }
    </div>
  )
};