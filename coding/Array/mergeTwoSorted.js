function mergeTwoSorted(arr1,arr2){
    const arr3 = arr1.concat(arr2);
    arr3.sort((a,b) => a-b)
    return arr3;
}


console.log(mergeTwoSorted([1,3,2],[4,6,5]))