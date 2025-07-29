function maxSubArraySum(arr){
    let sum = 0;
    let maxi = arr[0];
    for(let i = 0;i<arr.length;++i){
        sum = sum + arr[i];
        maxi = Math.max(maxi,sum);
        if(sum<0){
            sum = 0;
        }
    }
    return maxi;
}

console.log(maxSubArraySum([1,-2,3,4,-5]))
//kadane algorithm sum nikalo iterate karo maxi nikalo sum aur maxi me and then sum is less than 0 hai then sum = 0 kar do

function subset(arr){
    let rsult = [[]];
    for(const num of arr){
        let subset = [];
        for(const ele of rsult){
            subset.push([...ele,num]);
        }
        rsult.push(...subset);
    }
    return rsult
}

console.log(subset([1,2,3]))