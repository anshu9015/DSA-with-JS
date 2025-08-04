function secondLargest(arr){
    if(arr.length<2) return null;
    let largest = arr[0];
    let secondLargest = -Infinity;
    for(let i = 0;i<arr.length;++i){
        if(arr[i]>largest){
            secondLargest = largest
            largest = arr[i];
        }else if(arr[i]>secondLargest && arr[i] !== largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest === -Infinity ? null : secondLargest;
}


console.log(secondLargest([1,3,2,6,3,78,4]))


