import * as mongoose from 'mongoose';

var contratoSchema = new mongoose.Schema({
    informacoesLegais: { type: String, required: true },
    numeroDocumento: { type: Number, required: true },
    numeroLei: { type: Number, required: true },
    taxa: { type: Number, required: true },
    compromisso: { type: String, required: true },
    data: { type: Date, required: true },
    atleta: { type: mongoose.Schema.Types.ObjectId, ref: 'Atleta' },
    advogado: { type: mongoose.Schema.Types.ObjectId, ref: 'Advogado' }
});

model.exports = mongoose.model('Contrato', contratoSchema);