import * as mongoose from 'mongoose';

export interface IAlimentoPlano extends mongoose.Document{
    _id: mongoose.Types.ObjectId;
    alimento: String;
    horaAlimento: Number;
    minutoAlimento: Number;
    quantidade: Number;
    unidadeMedida: String;
}

let alimentoPlanoSchema = new mongoose.Schema({
    alimento: { type: String, required: true},
    horaAlimento: { type: Number, required: true},
    minutoAlimento: { type: Number, required: true},
    quantidade: { type: Number, required: true},
    unidadeMedida: { type: String, required: true}
});

export let AlimentoPlano = mongoose.model<IAlimentoPlano>('AlimentoPlano', alimentoPlanoSchema);
