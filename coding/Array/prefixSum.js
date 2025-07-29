function prefixSum(arr){
    let prefixSum = [];
    prefixSum[0] = arr[0];
    for(let i = 1;i<arr.length;++i){
        prefixSum[i] = prefixSum[i-1] + arr[i];
    }
    return prefixSum;
}
console.log(prefixSum([1,2,3,4,5]))



function prefixsum(arr,start,end){
    let prefixsum = [];
    prefixsum[0] = arr[0];
    for(let i = 1;i<arr.length;++i){
        prefixsum[i] = prefixsum[i-1] + arr[i];
    }
    if(start === 0){
        return prefixsum[end]
    }else{
        return prefixsum[end]-prefixsum[start-1]
    }
}


console.log(prefixsum([2, 4, -3, 5],1,3))

let arr = [1,2,3,4];
let shallowCopy  = [...arr];
shallowCopy.push(14)
console.log(shallowCopy);
console.log(arr);
let deepCopy = JSON.parse(JSON.stringify(arr));
deepCopy.push(12);
console.log(deepCopy)
console.log(arr)
// let deepCopy1 = structuredClone(arr);

function rest(...args){
    console.log("arguments", args,...args);
}

console.log(rest("sreya","prince"))

var a=10
// () execution context created
{
var a=100;
}
console.log("a",a)

var sum = 10;
function sum(){
    console.log("anshu")
    return 1;
}
console.log(sum);

var ab=10;
var bc=ab++;
console.log(ab,bc);


















