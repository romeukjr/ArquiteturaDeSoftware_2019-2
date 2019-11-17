import { Atleta } from '../atleta/Atleta';
import { Advogado } from './Advogado';
import { Entity } from '../../entity';

export class Contrato extends Entity {
    informacoesLegais: String;
    numeroDocumento: Number;
    numeroLei: Number;
    taxa: Number;
    compromisso: String;
    data: Date;
    atleta: Atleta;
    advogado: Advogado;

    constructor(informacoesLegais: String, numeroDocumento: Number, numeroLei: Number,
                taxa: Number, compromisso: String, data: Date){
        super();
        this.informacoesLegais = informacoesLegais;
        this.numeroDocumento = numeroDocumento;
        this.numeroLei = numeroLei;
        this.taxa = taxa;
        this.compromisso = compromisso;
        this.data = data;
    }

}