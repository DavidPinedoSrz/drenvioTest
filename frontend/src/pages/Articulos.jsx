import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Articulos = () => {
  const [productos, setProductos] = useState([]);
  const usuarioId = '123'; // Cambia esto por el ID del usuario actual

  const obtenerProductos = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/productos?usuarioId=${usuarioId}`);
      setProductos(response.data);
      console.log(response.data); // Verifica los datos recibidos
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <div>
      <h1>Artículos</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio Normal</th>
            <th>Precio Especial</th>
            <th>Categoría</th>
            <th>Stock</th>
            <th>Marca</th>
            <th>Descripción</th>
            <th>¿Tiene Precio Especial?</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <tr key={producto._id}>
              <td>{producto.name}</td>
              <td>${producto.precio}</td>
              <td>
                {producto.precioEspecial ? `$${producto.precioEspecial}` : 'N/A'}
              </td>
              <td>{producto.category}</td>
              <td>{producto.stock}</td>
              <td>{producto.brand}</td>
              <td>{producto.description}</td>
              <td>{producto.tienePrecioEspecial ? 'Sí' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Articulos;