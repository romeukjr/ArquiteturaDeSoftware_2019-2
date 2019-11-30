import { AvaliacaoDesempenho, AvaliacaoMedica } from './Avaliacao';
import { PlanoAlimentar } from './PlanoAlimentar';
import { Entity, getJsonEntityIdArray } from '../../entity';
import { Usuario } from '../Usuario';

export class Atleta extends Entity {
    nome: String;
    idade: Number;
    altura: Number;
    alergias: String;
    avaliacoesMedicas: AvaliacaoMedica[];
    avaliacoesDesempenho: AvaliacaoDesempenho[];
    planosAlimentares: PlanoAlimentar[];

    constructor(nome: string, idade: number, altura: number, alergias: string){
        super();
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.alergias = alergias;

        this.avaliacoesDesempenho = new Array();
        this.avaliacoesMedicas = new Array();
        this.planosAlimentares = new Array();
    }

    addAvaliacaoMedica(data: Date, responsavel: Usuario, peso: number, 
        temperaturaCorporal: number, pressao: number, batimentosCardiacos: number,
        lesao: string){
        this.avaliacoesMedicas.push(new AvaliacaoMedica(data, responsavel, peso, temperaturaCorporal,
                                    pressao, batimentosCardiacos, lesao));
    }

    addAvaliacaoDesempenho(data: Date, responsavel: Usuario, peso: number, 
        tempoJogo: number, percentualGordura: number, velocidadeMedia: number){
        this.avaliacoesDesempenho.push(new AvaliacaoDesempenho(data, responsavel,
                                            peso, tempoJogo, percentualGordura, velocidadeMedia));
    }

    addPlanoAlimentar(dataInicio: Date, dataFim: Date, qtdKCal: number, 
        qtdProteinas: number, qtdGordura: number, qtdAminoacidos?: number, 
        qtdMicronutrientes?: number, qtdMacronutrientes?: number){
        this.planosAlimentares.push(new PlanoAlimentar(dataInicio, dataFim, qtdKCal, qtdProteinas,
                                    qtdGordura, qtdAminoacidos, qtdMicronutrientes,
                                    qtdMacronutrientes));
    }

    toJSon(){
        return { 
            _id: this.getId(),
            nome: this.nome,
            idade: this.idade,
            altura: this.altura,
            alergias: this.alergias,
            avaliacoesMedicas: getJsonEntityIdArray(this.avaliacoesMedicas),
            avaliacoesDesempenho: getJsonEntityIdArray(this.avaliacoesDesempenho),
            planosAlimentares: getJsonEntityIdArray(this.planosAlimentares)
        }
    }

    buildFromJSON(json: any){
        super.buildFromJSON(json);
        this.nome = json.nome;
        this.idade = json.idade;
        this.altura = json.altura;
        this.alergias = json.alergias;
        /*json.avaliacoesMedicas.forEach(element => {
            let avaliacao = new AvaliacaoMedica().setId(element);
            this.avaliacoesMedicas.push(avaliacao);
        });*/
    }
    
}