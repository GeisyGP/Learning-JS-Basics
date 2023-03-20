/*Exercicio: Escreva uma função que imprima todos os números 
até o limite informado e indique se cada um deles é par ou 
ímpar.*/

function showNumbers (limit) {
    for(let i = 0; i <= limit; i++){
        const message = (i % 2 === 0) ? "Par" : "Ímpar";
        console.log(i, message);
    }
}

showNumbers(8);