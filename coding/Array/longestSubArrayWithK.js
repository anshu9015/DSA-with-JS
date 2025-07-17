function subArray(arr) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i; j < arr.length; ++j) {
            res.push(arr.slice(i, j + 1));
        }
    }
    return res;
}

const arr = [1, 2, -3, 2, -2];
let k = 0;

console.log(subArray(arr));


function longestSubArrayWithK(arr, k) {
    let response = [];
    const subArray1 = subArray(arr);
    for (let i = 0; i < subArray1.length; ++i) {
        if (subArray1[i].reduce((curr, acc) => curr + acc, 0) === k) {
            response.push(subArray1[i]);
        }
    }
    return response;
}
const arr1 = [1, 2, -3, 2, -2];

console.log(longestSubArrayWithK(arr1, 0));


function longestSubArray(arr, k) {
    let maxLength = 0;
    let maxIndex = -1;
    const targetArray = longestSubArrayWithK(arr, k);
    for (let i = 0; i < targetArray.length; ++i) {
        if (targetArray[i].length > maxLength) {
            maxLength = targetArray[i].length;
            maxIndex = i;
        }
    }
    return targetArray[maxIndex];
}

console.log(longestSubArray(arr1, 0));