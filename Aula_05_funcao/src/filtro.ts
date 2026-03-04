const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

const semDuplicados = numeros.filter( (valor, indice, self)=>{
    return self.indexOf(valor) === indice;
});

let pares = numeros.filter(n => n% 2 === 0);

let maiorQueTres = numeros.filter(n => n > 3);

let valores = [10, null, 25, undefined, 52, 95];
let valoresNaoNulos = valores.filter(v => v !== null && v != undefined);

type pessoa = {
    nome: string;
    idade: number;
}

const pessoas: pessoa[] = [
    {nome: "Ferdinando", idade: 30},
    {nome: "Francis", idade: 98},
    {nome: "Francesco", idade: 18},
    {nome: "Carol", idade: 15}
]

let maiorDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);