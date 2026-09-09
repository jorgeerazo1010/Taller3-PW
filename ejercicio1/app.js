const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Tasas 
const TASA_IVA = 0.13;   // 13% IVA
const TASA_RENTA = 0.10; // 10% Renta 

app.use(express.json());

function validarSalario(param) {
  const esNumerico = /^-?\d+(\.\d+)?$/.test(param);

  if (!esNumerico || param === undefined || param === null || param === '') {
    return { valido: false, error: 'El salario debe ser un número mayor a cero' };
  }

  const valor = Number(param);

  if (Number.isNaN(valor) || valor === 0 || valor < 0) {
    return { valido: false, error: 'El salario debe ser un número mayor a cero' };
  }

  return { valido: true, valor };
}

app.get('/api/calculo/:monto', (req, res) => {
  const { monto } = req.params;
  const validacion = validarSalario(monto);

  if (!validacion.valido) {
    return res.status(400).json({ error: validacion.error });
  }

  const montoNumerico = validacion.valor;
  const iva = Number((montoNumerico * TASA_IVA).toFixed(2));
  const renta = Number((montoNumerico * TASA_RENTA).toFixed(2));

  return res.status(200).json({
    monto: montoNumerico,
    iva,
    renta,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
