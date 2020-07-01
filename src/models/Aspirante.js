const { Schema, model } = require('mongoose');

const AspiranteSchema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    municipio: { type: String },
    procedencia: { type: String }
}, {
    timestamps: true
});

module.exports = model('Aspirante', AspiranteSchema);