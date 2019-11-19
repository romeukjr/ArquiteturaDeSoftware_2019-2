import { Time } from '@angular/common';
import { Entity } from '../../entity';

export class AlimentoPlano extends Entity {
    alimento: String;
    horario: Time;
    quantidade: Number;
    unidadeMedida: String;

    constructor(alimento: String, horario: Time, quantidade: Number, unidadeMedida: String){
        super();
        this.alimento = alimento;
        this.horario = horario;
        this.quantidade = quantidade;
        this.unidadeMedida = unidadeMedida;
    }

}