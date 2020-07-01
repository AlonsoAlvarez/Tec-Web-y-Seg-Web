const { Schema, model } = require('mongoose');

const AulaSchema = new Schema({
    nombre: { type: String, required: true },
}, {
    timestamps: true
});

module.exports = model('Aula', AulaSchema);