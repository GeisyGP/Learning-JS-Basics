/*EXERCÍCIO: Crie um objeto de circulo usando a sintaxe literal
do objeto. Ele deve ter uma propriedade radius que possamos ler
ou escrever e area que só é disponível para leitura. */

const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    } 
};

circle.radius = 2;
console.log(circle.area);