function subArrayWithSumK(arr,k){
    let res = [];
    for(let i = 0;i<arr.length;++i){
        for(let j = i;j<arr.length;++j){
            res.push(arr.slice(i,j+1));
        }
    }
    let count = 0;
    for(let i = 0;i<res.length;++i){
        let sum = 0;
        for(let j = 0;j<res[i].length;++j){
            sum += res[i][j];
        }
        if(sum === k){
            count++;
        }
    }
    return count
}

console.log(subArrayWithSumK([1,2,3],3))


function subArrayWithSumK1(arr,k){
    let count = 0;
    for(let i = 0;i<arr.length;++i){
        let sum = 0;
        for(let j = i;j<arr.length;++j){
            sum += arr[j];
            if(sum === k){
                count++;
            }
        }
    }
    return count;
}
console.log(subArrayWithSumK1([1,2,3],3))



function subArrayOptimizeSumK(arr,k){
    let prefixSum = new Map();
    let currSum = 0;
    let result = 0;
    for(let val of arr){
        currSum += val;
        if(currSum === k){
            result++;
        }
        prefixSum.set(currSum,(prefixSum.get(currSum-k) || 0) + 1);
        if(prefixSum.has(currSum-k)){
            result += prefixSum.get(currSum-k);
        }
    }
    return result
}


console.log(subArrayOptimizeSumK([1,2,3],3))