const { Schema, model } = require('mongoose');

const HorarioSchema = new Schema({
    nombre: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = model('Horario', HorarioSchema);