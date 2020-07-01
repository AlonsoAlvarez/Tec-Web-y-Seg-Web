const { Schema, model } = require('mongoose');

const DocenteSchema = new Schema(
  {
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    grado: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Docente', DocenteSchema);