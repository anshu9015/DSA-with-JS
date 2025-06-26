function missingNumber(arr,n){
    let missingArray = [];
    for(let i = 1; i<= n;++i){
        let found = false;
        for(let j = 0;j<arr.length;++j){
            if(arr[j] === i){
                found = true;
                break;
            }
        }
        if(!found){
            missingArray.push(i);
        }
    }
    return missingArray;
}

console.log(missingNumber([2,1,4],8));