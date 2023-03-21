/*EXERCICIO: Crie uma função chamada move, para mover um elemento
de um array. Ela recebe um array, o índice do elemento que queremos
mover e um deslocamento. */

const numbers = [1, -2, 3, 4, 3];

function move(array, index, offset) {
    const position = index + offset;

    if (position >= array.length || position < 0)
        return false;

    const result = [...array];
    const remove = result.splice(index, 1)[0]; //retorna um array, mas com o índice 0 retorna o elemento
    result.splice(position, 0, remove);
    return result;
}

const result = move(numbers, 1, 2);

if (result === false)
    console.error("Invalid offset");
else
    console.log(result);