var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var alimentoPlanoSchema = new Schema({
    alimento: { type: String, required: true},
    horaAlimento: { type: Number, required: true},
    minutoAlimento: { type: Number, required: true},
    quantidade: { type: Number, required: true},
    unidadeMedida: { type: String, required: true}
});

module.exports = mongoose.model('AlimentoPlano', alimentoPlanoSchema);