/*Exercicio: Escreva uma função que recebe um array e retorna 
quantos elementos Truthy tem nele.*/

function countTruthy(array) {
    let count = 0;
    
    for(let element of array) {
        if (element)
            count++;
    }
    return count;
}

const array = [0, 9, 10, "", 5, false];
console.log(countTruthy(array));