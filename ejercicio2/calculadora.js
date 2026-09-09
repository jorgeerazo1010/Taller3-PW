const { TASAS_IMPUESTOS } = require('./tasas');

function calcularImpuestos(paisNormalizado, salarioBruto) {
  const tasas = TASAS_IMPUESTOS[paisNormalizado];

  const iva = Number((salarioBruto * tasas.iva).toFixed(2));
  const renta = Number((salarioBruto * tasas.renta).toFixed(2));
  const salarioNeto = Number((salarioBruto - iva - renta).toFixed(2));

  return {
    pais: paisNormalizado,
    salarioBruto,
    porcentajeIVA: `${Math.round(tasas.iva * 100)}%`,
    porcentajeRenta: `${Math.round(tasas.renta * 100)}%`,
    iva,
    renta,
    salarioNeto
  };
}

module.exports = { calcularImpuestos };