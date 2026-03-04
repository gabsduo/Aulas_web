function mensagem (f:string):string{
    return f;
}

const mensagemLambda = (f:string):string => f;

console.log(mensagemLambda("Olá mundo!"));

function soma(a:number, b:number):void{
    console.log(a + b);
}

const somaLambda = (a:number, b:number):void => console.log(a + b);
somaLambda(5,8)

soma(2,5);

function saudacao(nome: string= "Visitante"):string{
    return`Olá, ${nome}`
}
saudacao("ADS");

const saudacaoLambda = (nome:string= "Visitante"):string => `Olá, ${nome}`
saudacaoLambda("Lucas")

function multiplicar(a:number, b:number){
    return a * b;
}
    // Valores Opcionais
const multiplicarOpcional = (a:number, b?:number):number =>{
    if(b === undefined){
        return a;
    }
    return a * b;
}

multiplicarOpcional(1,2);
multiplicarOpcional(4);

// Operador Ternário
const multiplicarOpTernario = (a:number, b?:number):number =>(b === undefined) ? a:a*b;

// Operador Coalescência nula
const multiplicarCoalescência = (a:number, b?:number):number => a * (b ?? 1);


