/*Exercicio: Escreva uma função chamada soma que recebe um
limite e retorna a soma de todos os múltiplos de 3 e 5, de 0 
até o limite.*/

function soma(limite){
    let total = 0;

    for (let i = 0; i <= limite; i++){
        if (i % 3 === 0 || i % 5 === 0)
            total += i;
    }
    
    return total;
}

console.log(soma(10));