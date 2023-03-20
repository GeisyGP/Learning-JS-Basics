/*Exercicio: Escreva uma função que recebe as notas de um aluno
em diferentes disciplinas, calcula a média e classifica em:

0-59: F
60-69: D
70-79: C
80-89: B
90-100: A*/

function calcularNota(marks) {
    const media = calcularMedia(marks);

    if (media >= 90) return "A";
    if (media >= 80) return "B";
    if (media >= 70) return "C";
    if (media >= 60) return "D";
    return "F";
}

function calcularMedia(array){
    let soma = 0;

    for (let value of array){
        soma += value ;
    }

    return soma / array.length;
}

const marks = [80, 80, 50];
console.log(calcularNota(marks));