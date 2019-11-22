import { Time } from '@angular/common';
import { Entity } from '../../entity';

export class AlimentoPlano extends Entity {
    alimento: String;
    horaAlimento: Number;
    minutoAlimento: Number;
    quantidade: Number;
    unidadeMedida: String;

    constructor(alimento: String, horaAlimento: Number, minutoAlimento: Number, quantidade: Number, unidadeMedida: String){
        super();
        this.alimento = alimento;
        this.horaAlimento = horaAlimento;
        this.minutoAlimento = minutoAlimento;
        this.quantidade = quantidade;
        this.unidadeMedida = unidadeMedida;
    }

}