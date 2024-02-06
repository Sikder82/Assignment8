// Create Function
function sortMaker(arr){
    if(arr[0]===arr[1]){
        return 'equal';
    }else if(arr[0]>0 && arr[1]>0){
        return ar= arr.sort().reverse();
    }else{
        return 'Invalid Input';
    }
}
const arr=[4,-2];

console.log(sortMaker(arr))