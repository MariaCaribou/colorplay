export const fetchPalette = async (type, count) => {
  const response = await fetch('http://localhost:3001/api/color/generatePalette', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, count })
  });
  const data = await response.json();
  return data;
};