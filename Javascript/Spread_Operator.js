const numbers = [1,2,3];

const a = [...numbers];
const newNumbers = [...numbers,4,5,6];
// console.log(newNumbers);

a.push(100,2000);

console.log(numbers);

const myObject1 = {
    a: 1,
    b: 2
}
const myObject2 = {
    c: 1,
    d: 2
}

console.log({
    ...myObject1,
    ...myObject2
})