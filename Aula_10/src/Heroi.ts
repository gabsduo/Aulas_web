type Categoria = 'Espadachim' | 'Mago' | 'Arqueiro';

export class heroi{
    nome: string;
    categoria: Categoria;
    ataque: number;
    custo: number;
    recurso: number;
    tipoRecurso: string

    constructor(nome: string, categoria: Categoria, ataque: number, custo: number){
        this.nome = nome;
        this.categoria = categoria;
        this.ataque = ataque;
        this.custo = custo;
        if(this.categoria === 'Espadachim'){
            this.recurso = 50;
            this.tipoRecurso = 'Stamina';
        }else if (this.categoria === 'Mago'){
            this.recurso = 40;
            this.tipoRecurso = 'Mana';
        } else{
            this.recurso = 10;
            this.tipoRecurso = 'Flechas';
        }
    }

    atacar():void{
        if(this.recurso >= this.custo){
            this.recurso -= this.custo;
            console.log(`Ataque de ${this.nome} bem sucedido, restando ${this.recurso} de ${this.tipoRecurso}`)
        } else{
            console.log(`Ataque de ${this.nome} falhou por falta de recurso`);
        }
    }

}