import { hexToHSL, hslToHex } from "./color.js";

export const generateMonochromaticPalette = () => {
  // Elegir un tono base aleatorio
  const baseHue = Math.floor(Math.random() * 360);
  const result = [];
  
  // Generar variaciones con distintas saturaciones y luminosidades
  // Versión más oscura con alta saturación
  result.push(hslToHex(baseHue, 85, 20));
  
  // Versión oscura
  result.push(hslToHex(baseHue, 75, 35));
  
  // Versión neutral/media
  result.push(hslToHex(baseHue, 65, 50));
  
  // Versión clara
  result.push(hslToHex(baseHue, 55, 65));
  
  // Versión más clara
  result.push(hslToHex(baseHue, 45, 80));
  
  // Versión muy clara/tenue
  result.push(hslToHex(baseHue, 30, 90));
  
  return result;
}

export const generateMonochromaticColor = (hex, index) => {
  // Extraemos el tono base de la paleta monocromática
  // Asumimos que todos los colores tienen el mismo tono
  const [h, s, l] = hexToHSL(hex);
  
  // Definimos rangos para saturación y luminosidad
  // Cada rango tendrá valores mínimos y máximos para crear variedad
  const ranges = [
    { satMin: 75, satMax: 95, lightMin: 15, lightMax: 30 },  // Muy oscuro
    { satMin: 65, satMax: 85, lightMin: 30, lightMax: 45 },  // Oscuro
    { satMin: 55, satMax: 75, lightMin: 45, lightMax: 60 },  // Medio-oscuro
    { satMin: 45, satMax: 65, lightMin: 55, lightMax: 70 },  // Medio
    { satMin: 35, satMax: 55, lightMin: 65, lightMax: 80 },  // Medio-claro
    { satMin: 25, satMax: 40, lightMin: 75, lightMax: 90 }   // Claro
  ];
  
  // Si el índice está fuera de rango, elegimos un rango aleatorio
  const range = index >= 0 && index < ranges.length
    ? ranges[index]
    : ranges[Math.floor(Math.random() * ranges.length)];
  
  // Generamos valores aleatorios dentro del rango seleccionado
  const newSat = Math.random() * (range.satMax - range.satMin) + range.satMin;
  const newLight = Math.random() * (range.lightMax - range.lightMin) + range.lightMin;
  
  // Podemos añadir una pequeña variación opcional al tono (±5)
  // para crear una familia de colores ligeramente diferente pero relacionada
  const hueVariation = Math.random() * 10 - 5; // ±5 grados de tono
  const newHue = (h + hueVariation + 360) % 360; // Aseguramos que esté entre 0-360
  
  return hslToHex(newHue, newSat, newLight);
}