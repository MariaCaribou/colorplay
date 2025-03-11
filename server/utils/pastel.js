import { hexToHSL, hslToHex } from "./color.js";

export const generatePastelPalette = () => {
  const hueStep = 60; // 360/6 = 60 grados entre colores
  const startHue = Math.floor(Math.random() * 360);
  
  return Array.from({ length: 6 }, (_, i) => {
    const hue = (startHue + i * hueStep) % 360;
    const saturation = 25 + Math.random() * 30; // Baja-media saturación
    const lightness = 75 + Math.random() * 15; // Alta luminosidad
    return hslToHex(hue, saturation, lightness);
  });
}

export const generatePastelColor = (hex) => {
  const hueStep = 60; // 360/6 = 60 grados entre colores
  const startHue = Math.floor(Math.random() * 360);
  
  const hue = (startHue + hueStep) % 360;
  const saturation = 25 + Math.random() * 30; // Baja-media saturación
  const lightness = 75 + Math.random() * 15; // Alta luminosidad

  return hslToHex(hue, saturation, lightness);
}