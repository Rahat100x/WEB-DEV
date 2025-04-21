import binary_search,{pi,a} from  './external.js'

console.log(pi,a);

const arr = [1,2,3,4,5];
const target = 5;

const result = binary_search(arr,target);
if(result != -1) {
    console.log(`${target} is found ${result} index!`);
} else {
    console.log(`${target} is not found!`);
}
