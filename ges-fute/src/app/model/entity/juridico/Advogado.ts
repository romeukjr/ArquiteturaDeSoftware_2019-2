import  { IUsuario } from '../Usuario';
import * as mongoose from 'mongoose';

export interface IAdvogado extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    usuario: IUsuario;
    carteiraOAB: String;
}

let advogadoSchema = new mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'},
    carteiraOAB: { type: String, required: true }
});

export let Advogado = mongoose.model<IAdvogado>('Advogado', advogadoSchema);