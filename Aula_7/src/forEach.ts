const numeros = [1, 2, 3, 4, 5];
const frutas: string[] = ['Maca', 'Banana', 'Uva'];

//para exibição
frutas.forEach( (item, index)=> {
    console.log(`${index}: ${item}`)
});

let contador: number = 0;

numeros.forEach(item => {
    contador += item
});