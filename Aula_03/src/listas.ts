let nomes: string[] = ["Ana", "João", "Maria"];
console.log(nomes);

let numeros: number[] = [1, 2, 3, 4, 5];

console.log("Numeros pos 1", numeros[1]);

nomes.splice(1,1);
console.log("DEpois do splice", nomes);


let years: Array < number> = [20, 30, 40];
let fruits: string[] = ["Banana", "Maçã"];
fruits.push("Laranja");
fruits.unshift("Uva");
fruits.pop();
fruits.shift();
console.log(fruits[0]);