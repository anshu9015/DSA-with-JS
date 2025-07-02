function consecutiveMaxSumSubArray(arr,k){

    let max = 0;
    let result = [];
    for(let i = 0;i<=arr.length-k;++i){
        let sum = 0;
        let arr1 = [];
        for(let j = i;j<i+k;++j){
            sum += arr[j];
            arr1.push(arr[j]);
        }
        if(max<sum){
            max = sum;
            result = arr1;
        }
    }
    return result;
}


function consecutiveMaxSum(arr,k){
    let max = 0;
    for(let i = 0;i<= arr.length-k;++i){
        let sum = 0;
        for(let j = i;j<i+k;++j){
            sum += arr[j];
        }
        if(max<sum){
            max = sum;
        }
    }
    return max;
}


// const arr = [1,2,3,4,5,6,7,8] , k = 4;

//longest consecutive maxSum of array of length 4
//[1,2,3,4] = 10
//[2,3,4,5] = 14
//[3,4,5,6] = 18
//[4,5,6,7] = 22
//[5,6,7,8] = 26

//loop goes from 0 to 4

console.log(consecutiveMaxSumSubArray([1,2,3,4,5,6,7,8,9,10,11,12],3));
console.log(consecutiveMaxSum([1,2,3,4,5,6,7,8,9,10,11,12],3));



// function subArrayWithZero(arr,k){

//     let max = 0;
//     let result = [];
//     for(let i = 0;i<=arr.length-k;++i){
//         let sum = 0;
//         let arr1 = [];
//         for(let j = i;j<i+k;++j){
//             sum += arr[j];
//             arr1.push(arr[j]);
//         }
//         if(max<sum){
//             max = sum;
//             result = arr1;
//         }
//     }
//     return result;
// }

const arr = [-4, -4, -3, 1, 6];

// prefixSum1 = [-4] = -4;

// prefixSum2 = [-4,-4] = -8;
// prefixSum3 = [-4,-4,-3] = -11;
// prefixSum4 = [-4,-4,-3,1] = -10;
// prefixSum5 = [-4,-4,-3,1,6] = -4;

function consecutiveMaxSum1(arr,k){
let windowSum = 0;
for(let i = 0;i<k;++i){
    windowSum += arr[i];
}
let maxSum = windowSum;
for(let i = k;i<arr.length-1;++i){
    windowSum = windowSum + arr[k] - arr[i-k];
    maxSum = Math.max(maxSum,windowSum);
}
return maxSum;
}

console.log(consecutiveMaxSum1([-4,-4,-3,1,6],4));

