/*Exercício: Trocar o valor das variáveis a e b*/

let a = "red";
let b = "blue";

console.log("Inicial:");
console.log(a);
console.log(b);

let aux = a;
a = b;
b = aux;

console.log("Trocados:");
console.log(a);
console.log(b);