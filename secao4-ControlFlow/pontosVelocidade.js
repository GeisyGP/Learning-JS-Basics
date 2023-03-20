/*Exercicio: Escreva uma função que recebe a velocidade de um 
veículo. O limite de velocidade é 70. Se estiver abaixo, 
retorna "Ok", depois a cada 5km/h acima do limite, recebe 1 
ponto. Se ultrapassar 12 pontos, tem a carteira suspensa.*/

function checkSpeed (speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log("Ok");
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);     
    if (points >= 12)
        console.log("Carteira suspensa");
    else 
        console.log("Points:", points);
}

checkSpeed(72);