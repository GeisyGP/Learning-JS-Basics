/*EXERCÍCIO: Crie um array de objetos, em que cada objeto é o que chamamos 
de objeto de faixa de preço.*/

let faixaPreço = [
    { limiteMin: 0, limiteMax: 50, rotulo: "$", tooltip: "Preço barato" }, 
    { limiteMin: 51, limiteMax: 150, rotulo: "$$", tooltip: "Preço moderado" },
    { limiteMin: 151, limiteMax: 151, rotulo: "$$$", tooltip: "Preço elevado" }
]

let produto = [
    { preçoProduto: 32 }
]

console.log(faixaPreço);