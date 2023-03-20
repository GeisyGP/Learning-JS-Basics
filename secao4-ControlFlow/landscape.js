/*Exercicio: Escreva uma função que receba dois argumentos: 
altura e largura. Ela retorna true se a imagem por paisagem, 
ou seja, largura maior que altura.*/

function isLandscape (width, height) {
    return (width > height);
}

let image = isLandscape(100, 160);
console.log(image); 
