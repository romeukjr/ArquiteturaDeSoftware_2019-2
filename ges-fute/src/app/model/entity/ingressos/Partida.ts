import * as mongoose from 'mongoose';

export interface IPartida extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    adversario: String;
    campeonato: String;
    data: Date;
}

let partidaSchema = new mongoose.Schema({
    adversario: { type: String, required: true },
    campeonato: { type: String, required: true },
    data: { type: Date, required: Date }
});

export let Partida = mongoose.model<IPartida>('Partida', partidaSchema);