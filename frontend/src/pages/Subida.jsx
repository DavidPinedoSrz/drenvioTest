import React, { useState } from 'react';
import axios from 'axios';

const Subida = ({ actualizarProductos }) => {
  const [formData, setFormData] = useState({
    usuarioId: '',
    productoId: '',
    precioEspecial: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/precios-especiales', formData);
      alert('Precio especial agregado/actualizado!');
      console.log(response.data); // Verifica la respuesta del servidor
      actualizarProductos(); // Actualiza la lista de productos
    } catch (error) {
      console.error(error);
      alert('Error al agregar/actualizar el precio especial');
    }
  };

  return (
    <div>
      <h1>Subida</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario ID"
          value={formData.usuarioId}
          onChange={(e) => setFormData({ ...formData, usuarioId: e.target.value })}
        />
        <input
          type="text"
          placeholder="Producto ID"
          value={formData.productoId}
          onChange={(e) => setFormData({ ...formData, productoId: e.target.value })}
        />
        <input
          type="number"
          placeholder="Precio Especial"
          value={formData.precioEspecial}
          onChange={(e) => setFormData({ ...formData, precioEspecial: e.target.value })}
        />
        <button type="submit">Agregar/Actualizar</button>
      </form>
    </div>
  );
};

export default Subida;