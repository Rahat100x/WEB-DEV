let expenses = [
    { description: "Groceries",amount: 50,category: "Food" },
    { description: "Electrixity",amount: 100,category: "Utilities" },
    { description: "Dinner",amount: 30,category: "Food"},
    { description: "Internet Bill",amount: 50,category: "Utilities" },
    { description: "Internet Bill",amount: 10,category: "XYZ" },
];

let expenseReport = expenses.reduce((report,expense) => {
    // report[expense.category] += expense.amount;
    report[expense.category] = (report[expense.category] || 0) + expense.amount;
    return report;
},{})

console.log(expenseReport);


// let tasks = [
//     { description: "Write report",completed: false,priority: 2 },
//     { description: "Send email",completed: true,priority: 3 },
//     { description: "Prepare presentation",completed: false,priority: 1 }
// ]

// let pendingSortedTasks = tasks.filter((task) => !task.completed).sort((a,b) => a.priority - b.priority)

// // console.log(pendingSortedTasks)    

// let movieRatings = [
//     {title: "Movie A",ratings: [4,5,3]},
//     {title: "Movie B",ratings: [5,5,4]},
//     {title: "Movie C",ratings: [3,4,2]},
// ]

// let averageRatings = movieRatings.map((movie) => {
//     let total = movie.ratings.reduce((sum,rating) => sum + rating,0);
//     let average = total / movie.ratings.length;
//     // movie.ratings = average.toFixed(2);
//     // return movie;
//     return `{title: ${movie.title},averageRating: ${average.toFixed(2)}}`
// })

// // console.log(averageRatings)

// const obj = {
//     personName: "Luban",
//     greet: function() {
//         console.log(`Hello ${this.personName}`)
//     }
// }

// console.log('Hello from JS');

// setTimeout(obj.greet.bind(obj),2 * 1000);

// Promise.resolve().then(() => {
//     console.log('1. Promise resolve')
//     Promise.resolve().then(() => {
//         console.log('2. Promise resolve')
//     });
// });

// // console.log("Bye Bye");

// setInterval(() => console.log("Hello JS"),1000)
