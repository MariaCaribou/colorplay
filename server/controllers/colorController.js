import { generatePalette, generatePaletteColor } from "../utils/palette.js";

export const getPalette = (request, response) => {
    const { type } = request.body;
    const palette = generatePalette(type);
    response.json({ palette });
}

export const getPaletteColor = (request, response) => {
  const { type, palette, index } = request.body;
  const paletteColor = generatePaletteColor(type, palette, index);
  response.json({ paletteColor });
}