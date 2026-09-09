const express = require('express');
const { validarPais, validarSalario } = require('./validaciones');
const { calcularImpuestos } = require('./calculadora');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// POST /api/impuestos  Body JSON: { "pais": "El Salvador", "salario": 1000 }
app.post('/api/impuestos', (req, res) => {
  try {
    const { pais, salario } = req.body;

    const paisNormalizado = validarPais(pais);
    const salarioBruto = validarSalario(salario);

    const resultado = calcularImpuestos(paisNormalizado, salarioBruto);
    res.json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /api/impuestos?pais=El Salvador&salario=1000  
app.get('/api/impuestos', (req, res) => {
  try {
    const { pais, salario } = req.query;

    const paisNormalizado = validarPais(pais);
    const salarioBruto = validarSalario(salario);

    const resultado = calcularImpuestos(paisNormalizado, salarioBruto);
    res.json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});