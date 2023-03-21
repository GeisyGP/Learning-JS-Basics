/*EXERCICIO: Crie uma função chamada except, que recebe um array
e outro array, sendo o segundo o que queremos exluir do primeiro. */

const numbers = [1, -2, 3, 4, 3];

function except(array, excluded) {
    const result = [];
    for (let i of array){
        if (!excluded.includes(i))
            result.push(i);
    }
    return result;
}

const result = except(numbers, [3]);

console.log(result);