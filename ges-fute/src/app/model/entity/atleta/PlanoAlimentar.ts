import {AlimentoPlano} from './AlimentoPlano';

export class PlanoAlimentar {
    id: number;
    dataInicio: Date;
    dataFim: Date;
    qtdKCal: number;
    qtdProteinas: number;
    qtdGordura: number;
    qtdAminoacidos: number;
    qtdMicronutrientes: number;
    qtdMacronutrientes: number;
    alimentosPlano: AlimentoPlano[];
    constructor(id: number, dataInicio: Date, dataFim: Date, qtdKCal: number, 
        qtdProteinas: number, qtdGordura: number, qtdAminoacidos: number, 
        qtdMicronutrientes: number, qtdMacronutrientes: number){
        this.id = id;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.qtdKCal = qtdKCal;
        this.qtdProteinas = qtdProteinas;
        this.qtdGordura = qtdGordura;
        this.qtdAminoacidos = qtdAminoacidos;
        this.qtdMicronutrientes = qtdMicronutrientes;
        this.qtdMacronutrientes = qtdMacronutrientes;
    }
}