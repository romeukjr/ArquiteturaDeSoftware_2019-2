import { Partida } from './Partida';
import { Usuario } from '../Usuario';
import { Entity } from '../../entity';

export class IngressoPartida extends Entity {
    cadeira: String;
    partida: Partida;
    usuario: Usuario;

    constructor (cadeira: string){
        super();
        this.cadeira = cadeira;
    }
}