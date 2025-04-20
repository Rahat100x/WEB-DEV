// let numbers = [1,2,3,4,5,6,7,8,9,10];
// const foo = numbers.find(function(currentValue,currentIndex,arr) {
//     return currentValue > 9;
// },this)

// console.log(foo);

// class Student {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     test() {
//         console.log("Hello");
//     }
//     exampleFunction() {
//         let array = [1,2,3];
//         array.find(function() {
//             this.test();
//         },this)
//     }
// }

// let student = new Student("Rahat",21);

// student.exampleFunction();

// let numbers = [1,2,3,4,5,6,7,8,9,10];

// const result = numbers.findIndex((currentValue,index,array) => {
//     return currentValue === 10;
// })

// console.log(result);

// let numbers = [1,2,3,4,5,6,7,8,9,10];

// const result = numbers.filter((value,index,arr) => {
//     return value > 5;
// },this);

// console.log(result);

// const index = numbers.indexOf(10);

// if(index > -1) {
//     numbers.splice(index,1);
// }

// console.log(numbers);

// const result = numbers.slice(1,7);
// console.log(result);

// const numbers1 = [1,2,3,4,5];
// const numbers2 = [6,7,8,9,10];

// const result = numbers1.concat(numbers2);
// console.log(result);

// numbers.push(100);
// console.log(numbers);

//map

// const foo = numbers.map((element) => {
//     return element * 2;
// })

// console.log(foo);

// const number = [1,2,3,4,5];

// const result = number.reduce((prevElement,currElement,currIndex,array) => {
//     return prevElement + currElement;
// },0);

// console.log(result);

// const myString = "I love Javascript";

// for(element in myString) {
//     console.log(element);
// }

const myObject = {
    name: 'Javascript',
    foundder: 'brendan Eich',
    estd: '1995',
    ranking: 2
}

const keys = Object.keys(myObject)
const value = Object.values(myObject);
const entries = Object.entries(myObject);

console.log(keys);
console.log(value);
console.log(entries);