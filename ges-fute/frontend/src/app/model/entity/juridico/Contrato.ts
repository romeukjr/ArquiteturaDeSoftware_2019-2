import { IAtleta } from '../atleta/Atleta';
import { IAdvogado } from './Advogado';
import * as mongoose from 'mongoose';

export interface IContrato extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    informacoesLegais: String;
    numeroDocumento: Number;
    numeroLei: Number;
    taxa: Number;
    compromisso: String;
    data: Date;
    atleta: IAtleta;
    advogado: IAdvogado;
}

let contratoSchema = new mongoose.Schema({
    informacoesLegais: { type: String, required: true },
    numeroDocumento: { type: Number, required: true },
    numeroLei: { type: Number, required: true },
    taxa: { type: Number, required: true },
    compromisso: { type: String, required: true },
    data: { type: Date, required: true },
    atleta: { type: mongoose.Schema.Types.ObjectId, ref: 'Atleta' },
    advogado: { type: mongoose.Schema.Types.ObjectId, ref: 'Advogado' }
});

export let Contrato = mongoose.model<IContrato>('Contrato', contratoSchema);