function secondLargest(arr){
    let largest = arr[0];
    let secondLargest = Number.MIN_VALUE;
    for(let i = 1;i<arr.length;++i){
        if(arr[i]>largest){
            largest = arr[i];
        }if(arr[i]>secondLargest && arr[i] !== largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}


console.log(secondLargest([1,3,2,6,3,78,4]))


