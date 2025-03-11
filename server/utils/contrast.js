import { hexToHSL, hslToHex } from "./color.js";

export const generateContrastPalette = () => {
  // Distancia fija para máximo contraste 
  const hueStep = 60; // 360/6 = 60 grados entre colores
  const startHue = Math.floor(Math.random() * 360);
  
  return Array.from({ length: 6 }, (_, i) => {
    const hue = (startHue + i * hueStep) % 360;
    const saturation = 90 + Math.random() * 10; // Alta saturación
    const lightness = 45 + Math.random() * 15; // Luminosidad media para buen contraste
    return hslToHex(hue, saturation, lightness);
  });
}

export const generateContrastColor = (hex) => {
  const hueStep = 60; // 360/6 = 60 grados entre colores
  const startHue = Math.floor(Math.random() * 360);
  
  const hue = (startHue + hueStep) % 360;
  const saturation = 90 + Math.random() * 10; // Alta saturación
  const lightness = 45 + Math.random() * 15; // Luminosidad media para buen contraste
  
  return hslToHex(hue, saturation, lightness);
}