function mergeTwoSorted(arr1,arr2){
    const arr3 = arr1.concat(arr2);
    arr3.sort((a,b) => a-b)
    return arr3;
}


console.log(mergeTwoSorted([1,3,2],[4,6,5]))

function mergeTwoSortedArray(arr1,arr2){
    let i = 0,j = 0;
    let result = [];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        result.push(arr1[i++]);
    }
    while(j<arr2.length){
        result.push(arr2[j++]);
    }
    return result;
}