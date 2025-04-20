// function number() {
//     return 10;
// }
// console.log(number());

// let number = () => 10;
// console.log(number());

let javascript = {
    name: 'Javascript',
    libraries: ['React','Angular','Vue'],
    printLibraries: function() {
        this.libraries.forEach((x) =>  console.log(`${this.name} loves ${x}`));
    }
}

javascript.printLibraries();