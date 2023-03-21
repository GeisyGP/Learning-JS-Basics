/*EXERCICIO: Crie uma função chamada "includes" como o método 
includes, imaginando que esse método não existe. A função recebe
um array e um elemento de pesquisa. Se o elemento de pesquisa
existir no array retorna true, caso contrário retorna false.*/

const numbers = [1, -2, 3, 4];

//console.log(numbers.includes(5));

function includes(array, searchElement) {
    for (let i of array){
        if(i === searchElement)
            return true;
    }
    return false;
}

console.log(includes(numbers, -2));