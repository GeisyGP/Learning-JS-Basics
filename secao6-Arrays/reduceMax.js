/*EXERCICIO: Crie uma função chamada getMax que recebe um array 
e retorna o maior número dele. */

const numbers = [1, 7, 3, 4, 3];

function getMax(array) {
    if (array.length === 0) 
        return undefined;
    
    return array.reduce((accumulator, current) => (current > accumulator) ? current : accumulator);
}

const max = getMax(numbers);

console.log(max);

// Forma básica de implementar na função:
/* let max = 0;

for (let i of array){
    if (i > max) 
        max = i;
}
return max; */