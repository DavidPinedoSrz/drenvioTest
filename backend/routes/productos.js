const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');
const PrecioEspecial = require('../models/PrecioEspecial').default;

// Obtener todos los productos con precios especiales para un usuario
router.get('/', async (req, res) => {
  try {
    const { usuarioId } = req.query; // Obtén el ID del usuario desde la consulta
    const productos = await Producto.find();
    const preciosEspeciales = await PrecioEspecial.find({ usuarioId }); // Busca precios especiales para el usuario

    // Combina los productos con los precios especiales
    const productosConPrecio = productos.map(producto => {
      const precioEspecial = preciosEspeciales.find(p => p.productoId === producto._id.toString());
      return {
        ...producto._doc,
        precio: producto.price, // Precio normal
        precioEspecial: precioEspecial ? precioEspecial.precioEspecial : null, // Precio especial (si existe)
        tienePrecioEspecial: !!precioEspecial, // Indica si el producto tiene un precio especial
      };
    });

    res.json(productosConPrecio);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;