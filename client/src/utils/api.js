import { generatePalette, generatePaletteColor } from "../../../server/utils/palette";
import { USE_SERVER, SERVER_API_URL } from "../config/config";

const fetchAPI = async(endpoint, body) => {
  const response = await fetch(`${SERVER_API_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: body
  });

  const result = await response.json();
  return result;
}

export const fetchPalette = async (type) => {
  return USE_SERVER
    ? await fetchAPI('color/getPalette', JSON.stringify({ type })).palette
    : generatePalette(type);
};

export const fetchPaletteColor = async (type, palette, index) => {
  return USE_SERVER
    ? await fetchAPI('color/getPaletteColor', JSON.stringify({ type, palette, index })).paletteColor
    : generatePaletteColor(type, palette, index);
}