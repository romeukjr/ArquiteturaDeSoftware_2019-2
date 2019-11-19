import { Entity } from '../../entity';

export class Partida extends Entity {
    adversario: String;
    campeonato: String;
    data: Date;

    constructor(adversario: String, campeonato: String, data: Date){
        super();
        this.adversario = adversario;
        this.campeonato = campeonato;
        this.data = data;
    }
}