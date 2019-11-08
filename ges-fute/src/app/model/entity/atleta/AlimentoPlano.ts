import { Time } from '@angular/common';

export class AlimentoPlano{
    id: number;
    alimento: string;
    horario: Time;
    quantidade: number;
    unidadeMedida: String;

    constructor(id: number, alimento: string, horario: Time, quantidade: number, unidadeMedida: String){
        this.id = id;
        this.alimento = alimento;
        this.horario = horario;
        this.quantidade = quantidade;
        this.unidadeMedida = unidadeMedida;
    }
}