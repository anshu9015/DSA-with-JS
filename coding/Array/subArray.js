function subArray(arr) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i; j < arr.length; ++j) {
            res.push(arr.slice(i, j + 1));
        }
    }
    // return res;

    for (let i = 0; i < res.length; i++) {
        let sum = 0;
        for (let j = 0; j < res[i].length; j++) {
            sum = sum + res[i][j];

        }
        if (sum == 0) {
            return res[i];
        }
    }
    return -1;
}

console.log(subArray([1, 2, -3, 2, -2])) //output: [1,2,-3]

// [1,2,3]
// [[1],[1,2],[1,2,3],[2],[2,3],[3]]


function subArray1(arr) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i; j < arr.length; ++j) {
            res.push(arr.slice(i, j + 1));
        }
    }
    let response = res.filter(item => item.reduce((acc, curr) => acc + curr, 0) === 0);
    console.log(response);
    let maxLength = -1;
    let max = -1;
    for (let i = 0; i < response.length; ++i) {
        if (response[i].length > maxLength) {
            maxLength = response[i].length;
            max = i;

        }
    }
    return response[max];
}

console.log(subArray1([1, 2, -3, 2, -2])) //output: [1,2,-3,2,-2]


function prefixSum(arr){
    let prefixSum = [];
    prefixSum[0] = arr[0];
    for(let i = 1;i<arr.length;++i){
        prefixSum[i] = prefixSum[i-1] + arr[i];
    }
    return prefixSum;
}

console.log(prefixSum([2, 4, -3, 5]))


function rangeSum(arr,start,end){
    let prefixsum = [];
    prefixsum[0] = arr[0];
    for(let i = 1;i<arr.length;++i){
        prefixsum[i] = prefixsum[i-1] + arr[i];
    } 
    if(start === 0){
        return prefixsum[end]
    } else{
        return prefixsum[end] - prefixsum[start-1]    
    }
    
}

console.log(rangeSum([2, 4, -3, 5],1,3))


function maximumSubArraySum(arr){
    let sum = 0;
    let maxi= arr[0];
    for(let i = 0;i<arr.length;++i){
        sum += arr[i];
        maxi = Math.max(maxi,sum);
        if(sum<0){
            sum = 0;
        }
    }
    return maxi;
}

console.log(maximumSubArraySum([1,2,3,-2]))


function targetsum(arr,k){
    let result = 0;
    let currsum = 0;
    let prefixSum = new Map();
    for(let ele of arr){
    currsum += ele;
    if(currsum === k){
        result++;
    }
    prefixSum.set(currsum,(prefixSum.get(currsum-k) || 0) +1);
    if(prefixSum.has(currsum-k)){
        result += prefixSum.get(currsum-k)
    }
   
    }
    return result;
}

console.log(targetsum([1,2,3,4],5))