/*EXERCÍCIO: Crie um objeto de endereço com três propriedades: 
street, city e zipCode. Crie uma função chamada showAddress(address)
que exibe todas as propriedades desse objeto junto com seu valor.*/

let address = {
    street: "Rua Professor Adalberto Neves",
    city: "Recife",
    zipCode: 52211417
};

function showAddress(address){
    for(let key in address){
        console.log(key, address[key]);
    }
}

showAddress(address);