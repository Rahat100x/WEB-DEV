if(!Array.prototype.MyforEach) {
    Array.prototype.MyforEach = function(callback) {
        for(let i = 0; i < this.length; i++) {
            callback(this[i],i,this);
        }
    }
}

let arr = [1,2,3,4,5,6,7];

// arr.MyforEach((e,i,arr) => {
//     console.log(`index: ${i} value: ${e} array : ${arr}`)
// })

if(!Array.prototype.Mymap) {
    Array.prototype.Mymap = function(callback) {
        const result = [];
        for(let i = 0; i < this.length; i++) {
            result.push(callback(this[i],i));
        }
        return result;
    }
}

if(!Array.prototype.Myreduce) {
    Array.Myreduce = function(callback,initavalue = undefined) {
        let acc = initavalue || this[0];
        const startIndex = initavalue ? 0 : 1;
        for(let i = startIndex; i < this.length; i++) {
            acc = callback(acc,this[i]);
        }
        return acc;   
    }
}