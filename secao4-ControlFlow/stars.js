/*Exercicio: Escreva uma função que mostra estrelas e tem como
parametro linhas.*/

function showStars(rows) { 
    for (let i = 0; i <= rows; i++){
        let pattern = "";
        for (let j = 0; j < i; j++){
            pattern += "*";
        }
        console.log(pattern);
    }
}

showStars(10);