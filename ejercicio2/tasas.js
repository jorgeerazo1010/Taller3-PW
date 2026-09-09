// Objeto con las tasas de IVA y Renta por país.
// Nota: El Salvador usa los valores exactos de (13% / 10%).
const TASAS_IMPUESTOS = {
  elsalvador: { iva: 0.13, renta: 0.10 },
  guatemala: { iva: 0.12, renta: 0.05 },
  costarica: { iva: 0.13, renta: 0.10 },
  honduras: { iva: 0.15, renta: 0.10 },
  panama: { iva: 0.07, renta: 0.10 },
  nicaragua: { iva: 0.15, renta: 0.10 }
};

module.exports = { TASAS_IMPUESTOS };