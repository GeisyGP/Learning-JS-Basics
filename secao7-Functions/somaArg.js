/*EXERCÍCIO: Crie uma função chamada "sum" que recebe um número 
variável de argumento e retorna a soma deles. Como desafio 
verifique se os argumentos são passados em um array.*/

function sum(...args){
    if(args.length === 1 && Array.isArray(args[0]))
        args = [...args[0]];

    return args.reduce((a, b) => a + b);
}

const array = [1, 5, 3, 2, 6];
console.log(sum(array));