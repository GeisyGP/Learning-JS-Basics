/*Exemplo if else: Mensagem diferente conforme o horário.*/

let hora = 15;

if (hora >= 6 && hora < 12)
    console.log("Bom dia!");
else if (hora >= 12 && hora < 18)
    console.log("Boa tarde!");
else
    console.log("Boa noite!"); 

/*Exemplo switch case: Verificar se é convidado ou moderador*/

let role = "moderator";

switch (role) {
    case "guest":
        console.log("Usuário convidado");
        break;

    case "moderator":
        console.log("Usuário moderador");
        break;

    default:
        console.log("Usuário desconhecido");
}