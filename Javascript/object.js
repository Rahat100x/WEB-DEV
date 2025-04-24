// const person = {
//   lastName: 'Rahat',
//   hobbies: ['coding','Gym'],
//   isMarried: false,
//   hasGf: false,
//   hadcrush: Infinity,
//   getFullName: function() {
//     return 'Luban Rahat';
//   },
//   address: {
//     hono: 1,
//     street: 1,
//     countryCode: 'BN',
//     state: 'Dhaka'
//   }
// }

// console.log(person.address.state)

// const remote = {
//   color: 'balack',
//   brand: 'XYZ',
//   dimensions: {height: 1,width: 1},
//   turnOff: function() {

//   },
//   volumeUp: function() {

//   }
// }

// let fname = 'Luban';
// let fname2 = fname;
// console.log(fname)
// fname2 = 'Rahat'
// console.log(fname)

let p1 = {
  fname: 'Luban',
  lname: 'Rahat',
  address: {
    h: 1,
    s: 1
  }
}

const p1String = JSON.stringify(p1)
console.log(p1String)
let p2 = JSON.parse(p1String);
console.log(p1);