import { Usuario } from '../Usuario';
import { Entity } from '../../entity';

// ao exportar JSON colocar tipo para identificar o tipo do chamado

export abstract class Chamado extends Entity {
    descricao: String;
    prioridade: Number;
    usuario: Usuario;

    constructor (descricao: String, prioridade: Number){
        super();
        this.descricao = descricao;
        this.prioridade = prioridade;
    }
}

export class Duvida extends Chamado {

}

export class Problema extends Chamado{
    localizacao: String;
    constructor (descricao: String, prioridade: Number, localizacao: String){
        super(descricao, prioridade);
        this.localizacao = localizacao;
    }
}

export class Denuncia extends Chamado {
    anonimato: Boolean;
    constructor (descricao: String, prioridade: Number, anonimato: Boolean){
        super(descricao, prioridade)
        this.anonimato = anonimato;
    }
}