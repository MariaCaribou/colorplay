const fetchAPI = async(endpoint, body) => {
  const response = await fetch(`http://localhost:3001/api/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: body
  });

  const result = await response.json();
  return result;
}

export const fetchPalette = async (type) => {
  const { palette } = await fetchAPI('color/getPalette', JSON.stringify({ type }))
  return palette;
};

export const fetchPaletteColor = async (type, palette, index) => {
  const { paletteColor } = await fetchAPI('color/getPaletteColor', JSON.stringify({ type, palette, index }));
  return paletteColor;
}