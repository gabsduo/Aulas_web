export class book{
    titulo: string;
    autor: string;
    anoPublicacao: number;
    editora: string;


    constructor(titulo: string, autor:string, anoPublicacao: number, editora: string){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.editora = editora;
    }

    exibirDados(): void {
        console.log(`Título: ${this.titulo} \n Autor: ${this.autor} \n Ano de Publicação: ${this.anoPublicacao} \n Editora: ${this.editora}` )
    }
}

export class usuario{
    nome: string;
    email:string;

    constructor(nome:string, email:string){
        this.nome = nome;
        this.email = email;
    }

    boasVindas(): void{
        console.log(`Bem vindo ${this.nome}! Seu email é ${this.email}`);
    }
}

export class carros{
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    mostrarCarro(): void{
        console.log(`Marca: ${this.marca} \n Modelo: ${this.modelo} \n Ano: ${this.ano}`);
    }
}

