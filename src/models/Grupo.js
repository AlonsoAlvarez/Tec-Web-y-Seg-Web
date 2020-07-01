const { Schema, model } = require('mongoose');

const GrupoSchema = new Schema({
    nombre: { type: String, required: true },
    edificio: { type: String, required: true },
    aula: { type: String, required: true },
    horario: { type: String, required: true },
}, {
    timestamps: true
});

module.exports = model('Grupo', GrupoSchema);