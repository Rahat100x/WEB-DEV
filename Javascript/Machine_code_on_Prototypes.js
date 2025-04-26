const arr = [1,2,3,4,5,6];
if(!Array.prototype.myForEach) {
    Array.prototype.myForEach = function(userFn) {
        for(let i = 0; i < this.length; i++) {
            userFn(this[i],i,this);    
        }
    }
}

if(!Array.prototype.myMap) {
    Array.prototype.myMap = function(userFun) {
        const result = []
        for(let i = 0; i < this.length; i++) {
            const value = userFun(this[i],i);
            result.push(value);
        }
        return result;
    }
}

if(!Array.prototype.myfilter) {
    Array.prototype.myfilter = function(calback) {
        const result = [];
        for(let i = 0; i < this.length; i++) {
            if(calback(this[i])) {
                result.push(this[i]);
            }
        }
        return result;
    };
}
const ans = arr.myfilter((e) => e % 2 === 0);
console.log(ans);