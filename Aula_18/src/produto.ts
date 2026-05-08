import { fabricante } from "./fabricante";

export class Produto{
    Id: number;
    Nome: string;
    Preco: number;
    Fabricante: fabricante;

    constructor(Id: number, Nome:string, Preco: number, Fabricante: fabricante){
        this.Id = Id;
        this.Nome = Nome;
        this.Preco = Preco;
        this.Fabricante = Fabricante;
    }
}