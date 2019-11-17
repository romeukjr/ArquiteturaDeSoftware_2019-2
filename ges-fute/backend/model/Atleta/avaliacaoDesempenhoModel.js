var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var avaliacaoDesempenhoSchema = new Schema({
    data: { type: Date, required: true},
    responsavel: {type: mongoose.Types.ObjectId, ref: 'Usuario'},
    peso: { type: Number, required: true },
    tempoJogo: { type: Number, required: true },
    percentualGordura: { type: Number, required: true },
    velocidadeMedia: { type: Number, required: true }
});

module.exports = mongoose.model('AvaliacaoDesempenho', avaliacaoDesempenhoSchema);