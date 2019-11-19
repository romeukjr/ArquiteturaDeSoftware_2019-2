import * as mongoose from 'mongoose';

var chamadoSchema = new mongoose.Schema ({
    descricao: { type: String, required: true },
    prioridade: { type: Number, enum: [1, 2, 3, 4, 5], required: true },
    tipo: { type: String, enum: ['Dúvida', 'Problema', 'Denúncia'], required: true},
    localizacao: { type: String },
    anonimato: { type: Boolean },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});

model.exports = mongoose.model('Chamado', chamadoSchema);