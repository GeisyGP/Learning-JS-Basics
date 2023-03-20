/*Exercicio: Escreva uma função que mostra todos os primos até o
limite informado.*/

function showPrimes(limit){
    for (let i = 2; i <= limit; i++){
        let count = 0;

        for (let j = 2; j < i; j++){
            if (i % j === 0){
                count++;
            }
        } 
        if (count === 0) console.log(i);
    }
}

showPrimes(20);

/*Outra forma, dividindo em duas funções:

function showPrimes(limit){
    for (let number = 2; number <= limit; number++){
        if (isPrime(number)) console.log(number);
    }
}
function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;
    return true;
}
showPrimes(20);
*/