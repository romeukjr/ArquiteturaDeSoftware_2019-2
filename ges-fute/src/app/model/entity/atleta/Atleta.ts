import { AvaliacaoMedica } from './Avaliacao';
import { AvaliacaoDesempenho } from './Avaliacao';
import { PlanoAlimentar } from './PlanoAlimentar';

export class Atleta {
    id: number;
    nome: string;
    idade: number;
    altura: number;
    alergias: string;
    avaliacoesMedicas: AvaliacaoMedica[];
    avaliacoesDesempenho: AvaliacaoDesempenho[];
    planosAlimentares: PlanoAlimentar[];
    constructor(id: number, nome: string, idade: number, altura: number, alergias: string){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.alergias = alergias;
    }
    
}