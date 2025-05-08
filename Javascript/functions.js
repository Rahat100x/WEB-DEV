let person1 = {
    name: "ravi",
    greet: function() {
        console.log(`Hello ${this.name}`)
    }
}

let parson2 = {
    name: "Raht"
}

person1.greet.call(parson2)
const bindGreet = person1.greet.bind(parson2);
bindGreet();
console.log(bindGreet())

