import * as mongoose from 'mongoose';

var partidaSchema = new mongoose.Schema({
    adversario: { type: String, required: true },
    campeonato: { type: String, required: true },
    data: { type: Date, required: Date }
});

module.exports = mongoose.model('Partida', partidaSchema);