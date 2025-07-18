function equalSubset(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    if (sum % 2 !== 0) return false;
    const target = sum / 2;
    const bool = targetSubset(arr,target);
    if(bool.length) return true;
    return false;
}


const Input = [1, 5, 11, 5];

const arr2 = [1, 2, 3, 5]
const arr3 = [2, 2, 3, 5]
const arr4 = [3, 1, 1, 2, 2, 1]
const arr5 = [1, 1, 1, 1, 1]

const arr6 = [1, 2, 3, 4, 5, 5]
console.log(equalSubset(Input))
console.log(equalSubset(arr2))
console.log(equalSubset(arr3))

console.log(equalSubset(arr4))

console.log(equalSubset(arr5))
console.log(equalSubset(arr6))




function targetSubset(arr,target){
    const result = [[]];
    let res = [];
    for(const num of arr){
        let subSeq = [];
        for(const ele of result){
            subSeq.push([...ele,num]);
        }
        result.push(...subSeq);
    }
    for(let i = 0;i<result.length;++i){
        let subsetSum = 0;
        for(let j = 0;j<result[i].length;++j){
            subsetSum += result[i][j];
        }
        if(subsetSum === target){
            res.push(result[i]);
        }
    } 
    return res; 
}

// console.log(targetSubset(Input,11));
// console.log(targetSubset(arr1,6));
