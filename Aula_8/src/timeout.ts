console.log("Antes do setTimeout");

let frase = "Rodando o setTimeout";
const timeout = setTimeout(()=> console.log("Executando o setTimeout"), 3000);

frase = "Rodando o clearTimeout"

if(frase !== "Rodando o setTimeout"){
    clearTimeout
    console.log(frase);
}
console.log("Depois do SetTimeout");

