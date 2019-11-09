import { IUsuario } from '../Usuario';
import * as mongoose from 'mongoose';

interface IAvaliacao extends mongoose.Document{
    _id: mongoose.Types.ObjectId;
    data: Date;
    responsavel: IUsuario;
    peso: Number;
}

//Avaliacao Desempenho
export interface IAvaliacaoDesempenho extends IAvaliacao{
    tempoJogo: Number;
    percentualGordura: Number;
    velocidadeMedia: Number;
}

var avaliacaoDesempenhoSchema = new mongoose.Schema({
    data: { type: Date, required: true},
    responsavel: {type: mongoose.Types.ObjectId, ref: 'Usuario'},
    peso: { type: Number, required: true },
    tempoJogo: { type: Number, required: true },
    percentualGordura: { type: Number, required: true },
    velocidadeMedia: { type: Number, required: true }
});

export var AvaliacaoDesempenho = mongoose.model<IAvaliacaoDesempenho>('AvaliacaoDesempenho', avaliacaoDesempenhoSchema);

// AvaliacaoMedica
export interface IAvaliacaoMedica extends IAvaliacao{
    temperaturaCorporal: Number;
    pressao: Number;
    batimentosCardiacos: Number;
    lesao: String;
}

var avaliacaoMedicaSchema = new mongoose.Schema({
    data: { type: Date, required: true},
    responsavel: {type: mongoose.Types.ObjectId, ref: 'Usuario'},
    peso: { type: Number, required: true },
    temperaturaCorporal: { type: Number, required: true },
    pressao: { type: Number, required: true },
    batimentosCardiacos: { type: Number, required: true },
    lesao: { type: String, required: true },
});

export var AvaliacaoMedica = mongoose.model<IAvaliacaoMedica>('AvaliacaoMedica', avaliacaoMedicaSchema);
