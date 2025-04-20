const lang = ["C","C++","Java","Python","Javascript","Kotlin"];

lang.push("C#")

const index = lang.indexOf("Java");
if(index > -1) {
    lang.splice(index,1);
}

// console.log(lang);

const search = lang.filter((x) => x !== "Kotlin");
// console.log(search);

for(let i = 0; i < lang.length; i++) {
    // console.log(lang[i]);
}

let countLang = 0;
for(let i = 0; i < lang.length; i++) {
    if(lang[i] !== "Javascript") {
        countLang++;
    }
}
// console.log(countLang);

let upperCase = [];
for(let i = 0; i < lang.length; i++) {
    upperCase.push(lang[i].toUpperCase());
}

// console.log(upperCase);

let countchar = lang[0];

for(let i = 0; i < lang.length; i++) {
    if(lang[i].length > countchar.length) {
        countchar = lang[i];
    }
}
// console.log(countchar);
const reverseArray = [];

for(let i = lang.length-1; i >= 0; i--) {
    reverseArray.push(lang[i]);
}
console.log(reverseArray);



