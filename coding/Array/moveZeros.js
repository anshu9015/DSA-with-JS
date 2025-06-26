function moveZeros(arr){
    let arr1 = [];
    let zeroCount = 0;
    for(let i = 0;i<arr.length;++i){
        if(arr[i] === 0){
            zeroCount++;
        }
        else{
            arr1.push(arr[i]);
        }
    }
    while(zeroCount){
        arr1.push(0);
        zeroCount--;
    }
    return arr1;
}
console.log(moveZeros([2,3,0,8,0,4]));