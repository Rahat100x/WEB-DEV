// console.log(typeof null);
// console.log(typeof undefined);
// console.log(Symbol())

// function randomeNumber() {
//     return Math.floor(Math.random()*10);
// }

// for(let i = 1; i <= 100; i++) {
//     console.log(randomeNumber());
// }

// let arr = [100,200,3,4,5,6];

// let newArray = [...arr,10000];

// newArray.forEach((element,index) => {
//     console.log(`${index+1} ${element}`)
// })

// let [x,y] = arr;

// console.log(x,y);

// let Student = {
//     name: 'Luban Raht',
//     roll: 7,
//     subject_mark: {
//         bangla: 'A',
//         english: 'A',
//         cpp: 'A+',
//         math: 'F'
//     },
//     allsubjectNumber: [10,30,50,89,89]
// }

// let {name,subject_mark,allsubjectNumber} = Student;

// console.log(subject_mark);
// console.log(name)
// console.log(allsubjectNumber);

// function check(value) {
//     if(value) {
//         console.log('True');
//     } else {
//         console.log('False');
//     }
// }

// check(1);
// check(0)
// check("Luban");
// check([])
// check({})
// check(null)
// check(undefined)

// let sallesData = [
//     {Product: "Laptop",price: 1200},
//     {Product: "Smartohone",price: 800},
//     {Product: "Headphone",price: 150},
//     {Product: "Keyboard",price: 80}
// ]

// // let totalSales = sallesData.reduce((acc,sale) => acc + sale.price,0);

// let lowStockItems = sallesData.filter((element) => element.price < 1200);
// console.log(lowStockItems);

let userActivity = [
    {usar: "Alice",activityCount: 45},
    {usar: "Bab",activityCount: 72},
    {usar: "Charlie",activityCount: 33},
];

let mostActiveUser = userActivity.reduce((maxUser,user) => 
    user.activityCount > maxUser.activityCount ? user : maxUser
);

console.log(mostActiveUser);