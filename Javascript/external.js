export const pi = Math.PI;
export const a = 2.10;

export default function binary_search(arr,target) {
    let left = 0,right = arr.length-1;
    while(left <= right) {
        let mid = Math.floor(left + (right-left) / 2);
        if(arr[mid] == target) return mid;
        else if(arr[mid] < target) left = mid+1;
        else right = mid-1;
    }
    return -1;
}