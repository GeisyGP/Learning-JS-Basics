/*EXERCÍCIO: Crie um objeto de blog post com as propriedades:
title, body, author, views, comments(author, body), isLive. Use 
a sintaxe literal do objeto para criar e inicializar. */

let post = {
    title: "Novo Post",
    body: "Esse é um novo post do blog",
    author: "Fulano",
    views: 100,
    comments: [
        { author: "a", body: "esse é um comentário" },
        { author: "b", body: "esse é outro comentário" },
    ],
    isLive: true
};

function newPost(post){
    for (let key in post){
        console.log(key, post[key]);
    }
}

newPost(post); 