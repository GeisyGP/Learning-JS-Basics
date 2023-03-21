/*Escreva uma função chamada arrayFromRange, que deve ter dois parâmetros: mínimo e máximo. 
O resultado da função deverá ser um array com os valores do mínimo ao máximo.*/

const numbers = arrayFromRange(-1, 5);

console.log(numbers);

function arrayFromRange(min, max){
    let resultado = [];
    for(let i = min; i <= max; i++){
        resultado.push(i);
    }
    return resultado;
}