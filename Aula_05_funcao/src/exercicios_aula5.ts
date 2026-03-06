// EXERCICIO 1
function maiscula (m:string):string{
   return m.toUpperCase();
 }

 console.log(maiscula("Ola mundo"));

 const maiscula_lambda = (m: string):string => m.toUpperCase();
 console.log(maiscula_lambda("ola mundo"));

 // EXERCICIO 2

 function elevar (x:number, y:number):number{
    return x ** y;
}

console.log(elevar(5,2));

// EXERCICIO 3
const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
function dobrarNumeros (numeros: number[]):number[]{
  return numeros.map(n => n*2)
}
console.log(dobrarNumeros(numeros));

// EXERCICIO 4
type Funcionario = {
  nome : string ;
  cargo : string ;
  };

  const funcionarios : Funcionario [] = [
  { nome : " Marcos ", cargo : "Desenvolvedor" } ,
  { nome : " Fernanda ", cargo : "Gerente" } ,
  { nome : " Carlos ", cargo : "Desenvolvedor" } ,
  { nome : " Joana ", cargo : "Analista" }
  ];

  let cargoEspecificado = funcionarios.filter(Funcionario => Funcionario.cargo === "Desenvolvedor")
  console.log(cargoEspecificado);
 
  // EXERCICIO 5

  type Aluno = {
    nome : string ;
    nota : number ;
    };
    
    const alunos : Aluno [] = [
    { nome : " Alice ", nota : 8 } ,
    { nome : " Bruno ", nota : 5 } ,
    { nome : " Carla ", nota : 7 } ,
    { nome : " Daniel ", nota : 6 }
    ];
    let notasAcima = alunos.filter(Aluno => Aluno.nota >= 7);
    console.log(notasAcima);