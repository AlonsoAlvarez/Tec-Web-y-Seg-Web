const { Schema, model } = require('mongoose');

const PagoSchema = new Schema({
    concepto: {type: String, required: true},
    precio: {type: String, required: true},
    aspirante: {type: String, required: true}
}, {
    timestamps: true
});

module.exports = model('Pago', PagoSchema);