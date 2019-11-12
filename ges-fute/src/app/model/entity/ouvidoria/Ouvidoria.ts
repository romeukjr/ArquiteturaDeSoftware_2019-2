import * as mongoose from 'mongoose';
import { IUsuario } from '../Usuario';

export interface IChamado extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    descricao: String;
    prioridade: Number;
    localizacao: String;
    anonimato: Boolean;
    usuario: IUsuario;
}

let chamadoSchema = new mongoose.Schema ({
    descricao: { type: String, required: true },
    prioridade: { type: Number, enum: [1, 2, 3, 4, 5], required: true },
    localizacao: { type: String },
    anonimato: { type: Boolean },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});

export let Chamado = mongoose.model<IChamado>('Chamado', chamadoSchema);