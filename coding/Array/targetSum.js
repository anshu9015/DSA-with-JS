function targetSum(arr,target){
    let res = [];
    for(let i = 0;i<arr.length-1;++i){
        for(let j = i+1;j<arr.length;++j){
            if(arr[i] + arr[j] === target){
                res.push([arr[i],arr[j]]);
            }
        }
    }
    return res;
}

const arr1 = [3, 5, 1, 7, 9]
let target = 10;

console.log(targetSum(arr1,target));

const arr2 = [1,2];
const arr3 = [3,4];

const result = [1,2,3,4];
console.log(arr2+arr3);