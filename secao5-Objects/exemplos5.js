// Tipos primitivos
let number = 10;

function increase (number){
    number++;
}

increase(number);
console.log(number);

//Resultado: number = 10

// Objetos

let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);

//Resultado: obj = 11

//OBJETO GLOBAL DATE:

const now = new Date();
const date1 = new Date("May 11 2018 09:00");
const date2 = new Date(2018, 4, 11, 9);

now.setFullYear(2017);