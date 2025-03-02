function randomColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return `#${hex.padStart(6, '0')}`;
}
  
function hexToHSL(hex) {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;

  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h *= 60;
  }
  return [h, s * 100, l * 100];
}
  
function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs((h / 60) % 2 - 1));
  let m = l - c / 2;
  let r = 0, g = 0, b = 0;

  if (h >= 0 && h < 60) { r = c; g = x; }
  else if (h >= 60 && h < 120) { r = x; g = c; }
  else if (h >= 120 && h < 180) { g = c; b = x; }
  else if (h >= 180 && h < 240) { g = x; b = c; }
  else if (h >= 240 && h < 300) { r = x; b = c; }
  else if (h >= 300 && h < 360) { r = c; b = x; }

  r = Math.round((r + m) * 255).toString(16).padStart(2, '0');
  g = Math.round((g + m) * 255).toString(16).padStart(2, '0');
  b = Math.round((b + m) * 255).toString(16).padStart(2, '0');

  return `#${r}${g}${b}`;
}
  
function generatePalette(type = 'monochromatic', count = 6) {
  const baseColor = randomColor();
  const [h, s, l] = hexToHSL(baseColor);
  let palette = [baseColor];

  for (let i = 1; i < count; i++) {
    let newH = h, newS = s, newL = l;

    if (type === 'monochromatic') {
      newL = (l + i * 10) % 100;
    } else if (type === 'analogous') {
      newH = (h + i * 30) % 360;
    } else if (type === 'complementary') {
      newH = (h + 180) % 360;
    } else if (type === 'triadic') {
      newH = (h + i * 120) % 360;
    }

    palette.push(hslToHex(newH, newS, newL));
  }

  return palette;
} 

module.exports = {
  generatePalette,
}