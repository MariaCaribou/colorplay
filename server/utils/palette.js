import { generateContrastColor, generateContrastPalette } from './contrast.js';
import { generateEclecticColor, generateEclecticPalette } from './eclectic.js';
import { generateMonochromaticColor, generateMonochromaticPalette } from './monochromatic.js';
import { generatePastelColor, generatePastelPalette } from './pastel.js';

export const generatePalette = (type) => {
  let palette;

  switch (type.toLowerCase()) {
    case 'contrast':
    case 'default':
      palette = generateContrastPalette();
      break;

    case 'eclectic':
      palette = generateEclecticPalette();
      break;
    
    case 'monochromatic':
      palette = generateMonochromaticPalette();
      break;

    case 'pastel':
      palette = generatePastelPalette();
      break;
  }

  return palette;
}

export const generatePaletteColor = (type, palette, index) => {
  let paletteColor;
  const hex = palette[index].hexValue;

  switch (type.toLowerCase()) {
    case 'contrast':
    case 'default':
      paletteColor = generateContrastColor(hex);
      break;

    case 'eclectic':
      paletteColor = generateEclecticColor();
      break;
    
    case 'monochromatic':
      paletteColor = generateMonochromaticColor(hex, index);
      break;

    case 'pastel':
      paletteColor = generatePastelColor(hex);
      break;
  }

  return paletteColor;
}