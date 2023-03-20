/*EXERCÍCIO: Use uma função construtora para criar um objeto de postagem, 
em que o usuário ainda não publicou seu rascunho de post. */

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let blogPost = new Post("Novo Post", "Esse é um novo post do blog", "Fulano");
console.log(blogPost);