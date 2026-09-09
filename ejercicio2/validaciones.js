const { TASAS_IMPUESTOS } = require('./tasas');

// Convierte "El Salvador", " el  salvador ", "EL SALVADOR" -> "elsalvador"
function normalizarPais(pais) {
  return pais
    .toString()
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // quita acentos
    .replace(/\s+/g, ''); // quita espacios
}

function validarPais(pais) {
  if (pais === undefined || pais === null || pais.toString().trim() === '') {
    throw new Error('Debe enviar el país');
  }

  const paisNormalizado = normalizarPais(pais);

  if (!TASAS_IMPUESTOS[paisNormalizado]) {
    const permitidos = Object.keys(TASAS_IMPUESTOS).join(', ');
    throw new Error(`País no permitido. Países válidos: ${permitidos}`);
  }

  return paisNormalizado;
}

function validarSalario(salario) {
  if (salario === undefined || salario === null || salario.toString().trim() === '') {
    throw new Error('Debe enviar el salario');
  }

  const valor = Number(salario);

  if (Number.isNaN(valor)) {
    throw new Error('El salario debe ser un número mayor a cero');
  }
  if (valor <= 0) {
    throw new Error('El salario debe ser un número mayor a cero');
  }

  return valor;
}

module.exports = { validarPais, validarSalario, normalizarPais };