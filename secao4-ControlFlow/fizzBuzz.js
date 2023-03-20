/*Exercicio: Escreva o algoritmo FizzBuzz*/

//Divisivel por 3 = fizz
//Divisivel por 5 = buzz
//Divisivel por 3 e 5 = fizzBuzz
//Não divisivel por 3 e 5 = input
//Não é um número = "Not a number"

function fizzBuzz (input) {
    if (typeof input !== "number") {
        return NaN;
    }
    else if ((input % 3 === 0) && (input % 5 === 0)){
        return "fizzBuzz";
    }
    else if (input % 3 === 0){
        return "fizz";
    }
    else if (input % 5 === 0){
        return "Buzz";
    }
    else {
        return input;
    }
}

const output = fizzBuzz(false);
console.log(output); 