var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var planoAlimentarSchema = new mongoose.Schema({
    dataInicio: { type: Date, required: true },
    dataFim: { type: Date, required: true },
    qtdKCal: { type: Number, required: true},
    qtdProteinas: { type: Number, required: true },
    qtdGordura: { type: Number, required: true },
    qtdAminoacidos: { type: Number },
    qtdMicronutrientes: { type: Number },
    qtdMacronutrientes: { type: Number },
    alimentosPlano: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AlimentoPlano'}]
});

module.exports = mongoose.model('PlanoAlimentar', planoAlimentarSchema);