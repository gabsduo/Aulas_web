const numbers = [22, 11, 7, 80, 1, 2, 3, 4, 5];

numbers.sort((a,b)=> a - b);// crescente
console.log(numbers);

numbers.sort((a,b)=> b - a);// decrescente
console.log(numbers);

const arquivos: string[] = ["item10.png", "item01.png", "item09.png", "item02.png"];
arquivos.sort( (a,b) => a.localeCompare(b));
console.log(arquivos);

"anisio".localeCompare("ANISIO", undefined, {sensitivity: 'base'}, );
