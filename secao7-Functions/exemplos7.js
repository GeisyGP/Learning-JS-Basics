//Operador Rest
function sum(discount, ...prices) {
    let total = prices.reduce((a, b) => a + b);
    
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));


//getters e setters
const person = {
    firstName: "Maria",
    lastName: "Silva",
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        if (typeof value != "string")
            throw new Error("Value is not a string.");

        const parts = value.split(" ");
        if(parts.length !== 2)
            throw new Error("Enter a first and last name.");

        this.firstName = parts[0];
        this.lastName = parts[1];        
    }
};

try { 
   person.fullName = "João Souza";
}
catch(e) {
    alert(e); //jeito antigo
}

console.log(person);

// "this"
const video = {
    title: "a",
    tags: ["a", "b", "c"],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

video.showTags();