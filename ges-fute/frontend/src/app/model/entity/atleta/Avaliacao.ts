import { Usuario } from '../Usuario';
import { Entity } from '../../entity';

abstract class Avaliacao extends Entity{
    data: Date;
    responsavel: Usuario;
    peso: Number;

    constructor(data: Date, responsavel: Usuario, peso: number){
        super()
        this.data = data;
        this.responsavel = responsavel;
    }

}
export class AvaliacaoDesempenho extends Avaliacao{
    tempoJogo: Number;
    percentualGordura: Number;
    velocidadeMedia: Number;

    constructor(data: Date, responsavel: Usuario, peso: number, 
        tempoJogo: number, percentualGordura: number, velocidadeMedia: number){
        super(data, responsavel, peso);
        this.tempoJogo = tempoJogo;
        this.percentualGordura = percentualGordura;
        this.velocidadeMedia = velocidadeMedia;
    }
}

export class AvaliacaoMedica extends Avaliacao{
    temperaturaCorporal: Number;
    pressao: Number;
    batimentosCardiacos: Number;
    lesao: String;

    constructor(data: Date, responsavel: Usuario, peso: number, 
        temperaturaCorporal: number, pressao: number, batimentosCardiacos: number,
        lesao: string){
        super(data, responsavel, peso);
        this.temperaturaCorporal = temperaturaCorporal;
        this.pressao = pressao;
        this.batimentosCardiacos = batimentosCardiacos;
        this.lesao = lesao;
    }
}