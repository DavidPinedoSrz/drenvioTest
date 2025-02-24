import { Schema, model } from 'mongoose';

const PrecioEspecialSchema = new Schema({
  usuarioId: { type: String, required: true },
  productoId: { type: String, required: true },
  precioEspecial: { type: Number, required: true },
});

export default model('PrecioEspecial', PrecioEspecialSchema, 'preciosEspecialesPinedo72');