var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var atletaSchema = new Schema({
    nome: { type: String, required: true},
    idade: { type: Number, required: true },
    altura: { type: Number, required: true },
    alergias: { type: String, required: true},
    avaliacoesMedicas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AvaliacaoMedica'}],
    avaliacoesDesempenho: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AvaliacaoDesempenho'}],
    planosAlimentares: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PlanoAlimentar'}]
});

module.exports = mongoose.model('Atleta', atletaSchema);