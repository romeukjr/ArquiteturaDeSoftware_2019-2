import  { Usuario } from '../Usuario';

export class Advogado extends Usuario {
    carteiraOAB: String;

    constructor(usuario: String, senha: String, nome: String, dataNascimento: Date,
        email: String, endereco: String, CPF: String, RG: string, carteiraOAB: String){
        super(usuario, senha, nome, dataNascimento, email, endereco, CPF, RG);
        this.carteiraOAB = carteiraOAB;
    }
}