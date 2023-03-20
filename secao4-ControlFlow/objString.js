/*Exercicio: Escreva uma função que recebe um objeto e retorna
todas as propriedades que são do tipo string.*/

function showProperties(obj){
    for (let key in obj){
        if (typeof obj[key] === "string") 
            console.log(key, ": ", obj[key]);
    }
}

const movie = {
    title: "Um Contratempo",
    releaseYear: 2017,
    rating: 4.9,
    director: "Oriol Paulo"
};

showProperties(movie);