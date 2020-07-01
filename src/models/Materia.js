const { Schema, model } = require('mongoose');

const MateriaSchema = new Schema({
    nombre: { type: String, required: true },
    titular: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = model('Materia', MateriaSchema);