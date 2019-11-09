import { IAvaliacaoMedica } from './Avaliacao';
import { IAvaliacaoDesempenho } from './Avaliacao';
import { IPlanoAlimentar } from './PlanoAlimentar';
import * as mongoose from 'mongoose';

export interface IAtleta extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    nome: String;
    idade: Number;
    altura: Number;
    alergias: String;
    avaliacoesMedicas: IAvaliacaoMedica[];
    avaliacoesDesempenho: IAvaliacaoDesempenho[];
    planosAlimentares: IPlanoAlimentar[];
}

var atletaSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    idade: { type: Number, required: true },
    altura: { type: Number, required: true },
    alergias: { type: String, required: true},
    avaliacoesMedicas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AvaliacaoMedica'}],
    avaliacoesDesempenho: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AvaliacaoDesempenho'}],
    planosAlimentares: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PlanoAlimentar'}]
});

export var Atleta = mongoose.model<IAtleta>('Atleta', atletaSchema);