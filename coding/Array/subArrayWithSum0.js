function subArrayWithSum0(arr){
    let currsum = 0;
    let seemSum = new Map();
    seemSum.set(0);
    for(let val of arr){
        currsum += val;
        if(seemSum.has(currsum)){
            return true;
        }
        seemSum.set(currsum);//because if two prefixsum are the same then it means between them the sum accumulates to zero
    }
    return false;
}

console.log(subArrayWithSum0([15,15, 1,2,-3]))

function checkSubArrayWithSum0(arr){
    let sum = 0;
    let prefixSum = new Set();
    prefixSum.add(0);
    for(let val of arr){
        sum += val;
        if(prefixSum.has(sum)){
            return true;
        }
        prefixSum.add(sum);
    }
    return false
}

console.log(checkSubArrayWithSum0([15,15,1,2,-3]))


function subarrayzero(arr){
    const prefixSum = new Set();
    let prefixSum1 = 0;
    prefixSum.add(0);
    for(let val of arr){
        prefixSum1 += val;
        if(prefixSum.has(prefixSum1)){
            return true;
        }
        prefixSum.add(prefixSum1)
    }
    return false;
}
