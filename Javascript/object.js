const person = {
  x: 10,
  firstName: "Luban",
  lastName: "Rahat",
  hobbies: ["Coding", "Gym"],
  isMarried: false,
  hasGf: false,
  getFullName: function () {
    return "Luban Rahat";
  },
  address: {
    hon: 1,
    street: 1,
    coubtryCode: "BN",
  },
};

console.log(person.getFullName());

let p1 = {
  fname: 'Luban',
  lname: 'Ch',
  address: {
    city:"Rajbari"
  }
}

const p1String = JSON.stringify(p1);
console.log(p1String);
let p2 = JSON.parse(p1String);

p2.fname = 'Rahat';
p1.address.city = "Dhaka";

console.log(p2)
console.log(p1)


