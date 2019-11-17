import * as mongoose from 'mongoose';
import { IPartida } from './Partida';
import { IUsuario } from '../Usuario';

export interface IIngressoPartida extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    cadeira: String;
    partida: IPartida;
    usuario: IUsuario;
}

let ingressoPartidaSchema = new mongoose.Schema({
    cadeira: { type: Number, required: true },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    partida: { type: mongoose.Schema.Types.ObjectId, ref: 'Partida' }
});

export let IngressoPartida = mongoose.model<IIngressoPartida>('IngressoPartida', ingressoPartidaSchema);