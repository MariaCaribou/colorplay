import { hslToHex } from './color.js';

const generateContrastTone = (startHue, index) => {
  const hueStep = 60; // 360/6 = 60 degrees between colors

  const hue = (startHue + index * hueStep) % 360;
  const saturation = 90 + Math.random() * 10; // High Sat
  const lightness = 45 + Math.random() * 15; // Medium L for good contrast
  return hslToHex(hue, saturation, lightness);
}

export const generateContrastPalette = () => {
  const startHue = Math.floor(Math.random() * 360);
  
  return Array.from({ length: 6 }, (_, i) => {
    return generateContrastTone(startHue, i);
  });
}

export const generateContrastColor = (hex) => {
  const startHue = Math.floor(Math.random() * 360);
  return generateContrastTone(startHue, 1);
}