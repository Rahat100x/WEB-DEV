Object.prototype.hello = function() {
    console.log("Hello world!")
}

const myObj = {
    name: 'Luban Rahat',
    type: 'cool'
}

myObj.hello();

const myleng = ['c++','python3','javascript'];
myleng.hello();
function binary_search(arr,target) {
    let left = 0,right = arr.length-1;
    while(left <= right) {
        let mid = left + (right-left) / 2;
        if(arr[mid] == target) return mid;
        else if(arr[mid] < target) left = mid+1;
        else right = mid-1;
    }
    return -1;
}