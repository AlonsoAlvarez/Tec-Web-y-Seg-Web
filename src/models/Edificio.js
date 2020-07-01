const { Schema, model } = require('mongoose');

const EdificioSchema = new Schema({
    nombre: { type: String, required: true },
}, {
    timestamps: true
});

module.exports = model('Edificio', EdificioSchema);