import * as mongoose from 'mongoose';

var advogadoSchema = new mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'},
    carteiraOAB: { type: String, required: true }
});

model.exports = mongoose.model('Advogado', advogadoSchema);