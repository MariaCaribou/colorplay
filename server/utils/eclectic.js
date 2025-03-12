import { hslToHex } from './color.js';

export const generateEclecticPalette = () => {
  return Array.from({ length: 6 }, (_, i) => {
    return generateEclecticColor();
  });
}

export const generateEclecticColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const sat = 30 + Math.floor(Math.random() * 70);
  const light = 20 + Math.floor(Math.random() * 60);
  return hslToHex(hue, sat, light);
}