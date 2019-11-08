import { Usuario } from '../Usuario';

abstract class Avaliacao {
    id: number;
    data: Date;
    responsavel: Usuario;
    peso: number;

    constructor(id: number, data: Date, responsavel: Usuario, peso: number){
        this.id = id;
        this.data = data;
        this.responsavel = responsavel;
    }
}

export class AvaliacaoDesempenho extends Avaliacao{
    tempoJogo: number;
    percentualGordura: number;
    velocidadeMedia: number;

    constructor(id: number, data: Date, responsavel: Usuario, peso: number, 
                   tempoJogo: number, percentualGordura: number, velocidadeMedia: number){
        super(id, data, responsavel, peso);
        this.tempoJogo = tempoJogo;
        this.percentualGordura = percentualGordura;
        this.velocidadeMedia = velocidadeMedia;
    }
}

export class AvaliacaoMedica extends Avaliacao{
    temperaturaCorporal: number;
    pressao: number;
    batimentosCardiacos: number;
    lesao: string;

    constructor(id: number, data: Date, responsavel: Usuario, peso: number, 
        temperaturaCorporal: number, pressao: number, batimentosCardiacos: number,
        lesao: string){
        super(id, data, responsavel, peso);
        this.temperaturaCorporal = temperaturaCorporal;
        this.pressao = pressao;
        this.batimentosCardiacos = batimentosCardiacos;
        this.lesao = lesao;
    }
}