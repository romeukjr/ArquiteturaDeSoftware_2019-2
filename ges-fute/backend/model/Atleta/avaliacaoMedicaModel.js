
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var avaliacaoMedicaSchema = new mongoose.Schema({
    data: { type: Date, required: true},
    responsavel: {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'},
    peso: { type: Number, required: true },
    temperaturaCorporal: { type: Number, required: true },
    pressao: { type: Number, required: true },
    batimentosCardiacos: { type: Number, required: true },
    lesao: { type: String, required: true },
});

module.exports = mongoose.model('AvaliacaoMedica', avaliacaoMedicaSchema);