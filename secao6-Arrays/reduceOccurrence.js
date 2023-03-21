/*EXERCICIO: Crie uma função chamada countOccurrences, que recebe
um array e um elemento de pesquisa e retorna o número de vezes
que o elemento ocorreu neste array. */

const numbers = [1, 2, 3, 4, 3];

function countOccurrences(array, searchElement) {
 
    return array.reduce((accumulator, currentValue) => {
       const occurrence = (currentValue === searchElement) ? 1 : 0;
       return accumulator + occurrence;
    }, 0);

}

const count = countOccurrences(numbers, 3);

console.log(count);

// Forma básica seria implementar na função:
//    for (let i of array) {
//        if (i === searchElement)
//            count++;
//    }
//    return count;