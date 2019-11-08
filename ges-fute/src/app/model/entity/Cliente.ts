import { Usuario } from './Usuario';

export class Cliente extends Usuario{
    dataNascimento: Date;
    email: string;
    endereco: string;
    CPF: string;
    RG: string;
    constructor(id: number, usuario: string, senha: string, nome: string, 
        dataNascimento: Date, email: string, endereco: string, CPF: string, RG: string){
        super(id, usuario, senha, nome);
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.endereco = endereco;
        this.CPF = CPF;
        this.RG = RG;
    }

}