const express = require('express');
const router = express.Router();
const PrecioEspecial = require('../models/PrecioEspecial').default;

// Agregar o actualizar un precio especial
router.post('/', async (req, res) => {
  const { usuarioId, productoId, precioEspecial } = req.body;

  try {
    // Busca si ya existe un precio especial para este usuario y producto
    const precioExistente = await PrecioEspecial.findOne({ usuarioId, productoId });

    if (precioExistente) {
      // Si existe, actualiza el precio especial
      precioExistente.precioEspecial = precioEspecial;
      await precioExistente.save();
      res.status(200).json(precioExistente); // Respuesta con el precio actualizado
    } else {
      // Si no existe, crea un nuevo precio especial
      const nuevoPrecio = new PrecioEspecial({ usuarioId, productoId, precioEspecial });
      await nuevoPrecio.save();
      res.status(201).json(nuevoPrecio); // Respuesta con el nuevo precio
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;