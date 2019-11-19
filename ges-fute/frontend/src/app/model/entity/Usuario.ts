import { Entity } from '../entity';

export class Usuario extends Entity{
    usuario: String;
    senha: String;
    nome: String;
    dataNascimento: Date;
    email: String;
    endereco: String;
    CPF: String;
    RG: String;

    constructor(usuario: String, senha: String, nome: String, dataNascimento: Date,
                email: String, endereco: String, CPF: String, RG: string){
        super();
        this.usuario = usuario;
        this.senha = senha;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.endereco = endereco;
        this.CPF = CPF;
        this.RG = RG;
    }
}