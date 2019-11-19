import * as mongoose from 'mongoose';

var ingressoPartidaSchema = new mongoose.Schema({
    cadeira: { type: Number, required: true },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    partida: { type: mongoose.Schema.Types.ObjectId, ref: 'Partida' }
});

model.exports = mongoose.model('IngressoPartida', ingressoPartidaSchema);