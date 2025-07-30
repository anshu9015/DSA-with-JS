function maxSumSubArraySizeK(arr,k){
    let windowSum = 0;
    for(let i = 0;i<k;++i){
        windowSum += arr[i];
    }
    let max = windowSum;
    for(let i = k;i<arr.length;++i){
        windowSum = windowSum + arr[i] - arr[i-k];
        max = Math.max(windowSum,max);
    }
    return max;
}


console.log(maxSumSubArraySizeK([1,2,3,4,5,6,7,8],4));