function consecutiveMaxSum(arr,k){

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


// const arr = [1,2,3,4,5,6,7,8] , k = 4;

//longest consecutive maxSum of array of length 4
//[1,2,3,4] = 10
//[2,3,4,5] = 14
//[3,4,5,6] = 18
//[4,5,6,7] = 22
//[5,6,7,8] = 26

//loop goes from 0 to 4

console.log(consecutiveMaxSum([1,2,3,4,5,6,7,8,9,10,11,12],4));


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
