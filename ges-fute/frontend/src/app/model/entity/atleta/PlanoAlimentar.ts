import * as mongoose from 'mongoose';
import { IAlimentoPlano, AlimentoPlano } from './AlimentoPlano';

export interface IPlanoAlimentar extends mongoose.Document{
    _id: mongoose.Types.ObjectId;
    dataInicio: Date;
    dataFim: Date;
    qtdKCal: number;
    qtdProteinas: number;
    qtdGordura: number;
    qtdAminoacidos: number;
    qtdMicronutrientes: number;
    qtdMacronutrientes: number;
    alimentosPlano: IAlimentoPlano[];
}

let planoAlimentarSchema = new mongoose.Schema({
    dataInicio: { type: Date, required: true },
    dataFim: { type: Date, required: true },
    qtdKCal: { type: Number, required: true},
    qtdProteinas: { type: Number, required: true },
    qtdGordura: { type: Number, required: true },
    qtdAminoacidos: { type: Number },
    qtdMicronutrientes: { type: Number },
    qtdMacronutrientes: { type: Number },
    alimentosPlano: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AlimentoPlano'}]
});

export let PlanoAlimentarModel = mongoose.model<IPlanoAlimentar>('PlanoAlimentar', planoAlimentarSchema);

export class PlanoAlimentar {
    _id: mongoose.Types.ObjectId;
    dataInicio: Date;
    dataFim: Date;
    qtdKCal: number;
    qtdProteinas: number;
    qtdGordura: number;
    qtdAminoacidos: number;
    qtdMicronutrientes: number;
    qtdMacronutrientes: number;
    alimentosPlano: AlimentoPlano[];
}