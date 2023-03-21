// Encontrar objetos em array.

const courses = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
];

const course = courses.find(course => course.name === "a");

console.log(course);

// Remover do fim.

const numeros = [1, 2, 3, 4];

const last = numeros.pop();
console.log(numeros);
console.log(last); //retorna o elemento removido

//Combined & Slice

const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [7, 8, 9];

const slice = array1.slice(2);

const combined = array1.concat(array2);
const sliceCombined = combined.slice(3);

console.log("array1", array1);
console.log("slice array1", slice);
console.log("array2", array2);
console.log("combined", combined);
console.log("slice combined", sliceCombined);

// Método Join

const array = [1, 2, 3];
const joined = array.join(", ");
console.log(joined);

//Ordenar array de objetos

const cursos = [
    { id: 1, name: "Node.js" },
    { id: 2, name: "javaScript" },
];

courses.sort(function(a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});

console.log(courses);

//Filtrar e mapear em string

const number = [1, 2, -1, 3];

const filtered = numbers.filter(n => n >= 0);

const item = filtered.map(n => "<li>" + n + "<li>")

const html = "<ul>" + items.join("") + "</ul>";

console.log(html);

//Mapear em objeto

const numbers = [1, 2, -1, 3];

const items = numbers.map(n => {
    const obj = { value: n };
    return obj;
});

console.log(items);

/*Mapear em objeto "resumida"

const numbers = [1, 2, -1, 3];

const items = numbers.map(n => ({ value: n }));

console.log(items);*/

// Mapear e filtrar (encadeamento)

const numero = [1, 2, -1, 3];

const itens = numero
    .filter(n => n >= 0)
    .map(n => ({ value: n }));

console.log(itens);

// Reduce

const precos = [1, 3, 2, 6];

const soma = precos.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(soma);