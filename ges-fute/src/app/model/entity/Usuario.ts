export class Usuario{
    id: number;
    usuario: string;
    senha: string;
    nome: string;

    constructor(id: number, usuario: string, senha: string, nome: string){
        this.id = id;
        this.usuario = usuario;
        this.senha = senha;
        this.nome = nome;
    }
}