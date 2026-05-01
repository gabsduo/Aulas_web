import { descricao } from "./descricao";
import { Pacote } from "./Pacote";

export class Voo{
    Id: string;
    data_envio: string;
    pacotes: Pacote;
    descricoes: descricao;


    constructor(Id: string, data_envio: string, pacotes: Pacote, descricoes: descricao){
        this.Id = Id;
        this.data_envio = data_envio;
        this.pacotes = pacotes;
        this.descricoes = descricoes;
    }
}