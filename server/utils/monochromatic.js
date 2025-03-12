import { hexToHSL, hslToHex } from './color.js';

export const generateMonochromaticPalette = () => {
  // Choose a random base color
  const baseHue = Math.floor(Math.random() * 360);
  const result = [];
  
  // Generate variations
  result.push(hslToHex(baseHue, 85, 20));
  result.push(hslToHex(baseHue, 75, 35));
  result.push(hslToHex(baseHue, 65, 50));
  result.push(hslToHex(baseHue, 55, 65));
  result.push(hslToHex(baseHue, 45, 80));
  result.push(hslToHex(baseHue, 30, 90));
  
  return result;
}

export const generateMonochromaticColor = (hex, index) => {
  // Extract base color
  const [h, s, l] = hexToHSL(hex);
  
  // Define ranges for Sat and L
  const ranges = [
    { satMin: 75, satMax: 95, lightMin: 15, lightMax: 30 },  // Very dark
    { satMin: 65, satMax: 85, lightMin: 30, lightMax: 45 },  // Dark
    { satMin: 55, satMax: 75, lightMin: 45, lightMax: 60 },  // Mid-dark
    { satMin: 45, satMax: 65, lightMin: 55, lightMax: 70 },  // Mid
    { satMin: 35, satMax: 55, lightMin: 65, lightMax: 80 },  // Mid-light
    { satMin: 25, satMax: 40, lightMin: 75, lightMax: 90 }   // Light
  ];
  
  // If index out of range, choose random color
  const range = index >= 0 && index < ranges.length
    ? ranges[index]
    : ranges[Math.floor(Math.random() * ranges.length)];
  
  // Generate random values within the selected range
  const newSat = Math.random() * (range.satMax - range.satMin) + range.satMin;
  const newLight = Math.random() * (range.lightMax - range.lightMin) + range.lightMin;
  
  // Small variation (±5)
  const hueVariation = Math.random() * 10 - 5;
  const newHue = (h + hueVariation + 360) % 360;
  
  return hslToHex(newHue, newSat, newLight);
}