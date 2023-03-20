/*Exercicio: Escreva uma função que receba dois números e 
retorne o máximo dos dois. Chame essa função, forneça um 
argumento diferente e verifique se está funcionando 
corretamente */

function maxDois (a, b) {
    return (a>b) ? a : b;
}

let maximo = maxDois(9, 6);
console.log(maximo);