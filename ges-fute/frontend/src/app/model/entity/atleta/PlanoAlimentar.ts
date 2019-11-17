import { AlimentoPlano } from './AlimentoPlano';
import { Entity } from '../../entity';
import { Time } from '@angular/common';

export class PlanoAlimentar extends Entity{
    dataInicio: Date;
    dataFim: Date;
    qtdKCal: Number;
    qtdProteinas: Number;
    qtdGordura: Number;
    qtdAminoacidos: Number;
    qtdMicronutrientes: Number;
    qtdMacronutrientes: Number;
    alimentosPlano: AlimentoPlano[];
    constructor(dataInicio: Date, dataFim: Date, qtdKCal: number, 
        qtdProteinas: number, qtdGordura: number, qtdAminoacidos?: number, 
        qtdMicronutrientes?: number, qtdMacronutrientes?: number){
        super();
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.qtdKCal = qtdKCal;
        this.qtdProteinas = qtdProteinas;
        this.qtdGordura = qtdGordura;
        this.qtdAminoacidos = qtdAminoacidos;
        this.qtdMicronutrientes = qtdMicronutrientes;
        this.qtdMacronutrientes = qtdMacronutrientes;

        this.alimentosPlano = new Array();
    }

    addAlimento(alimento: String, horario: Time, quantidade: Number, unidadeMedida: String){
        this.alimentosPlano.push(new AlimentoPlano(alimento, horario, quantidade, unidadeMedida));
    }
}