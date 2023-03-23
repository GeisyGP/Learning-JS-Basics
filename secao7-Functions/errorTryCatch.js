/*EXERCÍCIO: Usando o código "reduceOccurrence.js" de arrays, se
o primeiro argumento de countOccurrences não for um array, lance 
uma exceção e quebre as duas última linhas em um bloco try catch*/

const numbers = undefined;
let count;

function countOccurrences(array, searchElement) {
    if(!Array.isArray(array))
        throw new Error("Array is not a array.")

    return array.reduce((accumulator, currentValue) => {
       const occurrence = (currentValue === searchElement) ? 1 : 0;
       return accumulator + occurrence;
    }, 0);

}
try{
    count = countOccurrences(numbers, 3);
    console.log(count);
}
catch(e){
    alert(e);
}