import { hslToHex } from './color.js';

const generatePastelTone = (startHue, index) => {
  const hueStep = 60; // 360/6 = 60 grados entre colores

  const hue = (startHue + index * hueStep) % 360;
  const saturation = 25 + Math.random() * 30; // Low-mid sat
  const lightness = 75 + Math.random() * 15; // High L
  return hslToHex(hue, saturation, lightness);
}

export const generatePastelPalette = () => {
  const startHue = Math.floor(Math.random() * 360);
  
  return Array.from({ length: 6 }, (_, i) => {
    return generatePastelTone(startHue, i);
  });
}

export const generatePastelColor = (hex) => {
  const startHue = Math.floor(Math.random() * 360);
  return generatePastelTone(startHue, 1);
}