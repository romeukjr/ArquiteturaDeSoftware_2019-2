import * as mongoose from 'mongoose';

export interface IUsuario extends mongoose.Document{
    _id: mongoose.Types.ObjectId;
    usuario: String;
    senha: String;
    nome: String;
    dataNascimento: Date;
    email: string;
    endereco: string;
    CPF: string;
    RG: string;
}

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

export var Usuario = mongoose.model<IUsuario>('Usuario', usuarioSchema);