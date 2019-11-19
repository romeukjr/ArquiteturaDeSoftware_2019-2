import * as mongoose from 'mongoose';

var usuarioSchema = new mongoose.Schema({
    usuario: { type: String, required: true},
    senha: { type: String, required: true},
    nome: { type: String, required: true},
    dataNascimento: { type: Date, required: true },
    email: { type: String, required: true},
    endereco: { type: String, required: true},
    CPF: { type: String, required: true},
    RG: { type: String, required: true}
});

model.exports = mongoose.model('Usuario', usuarioSchema);