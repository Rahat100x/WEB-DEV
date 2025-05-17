
function increment() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const x = increment();
const y = increment();

console.log(x())