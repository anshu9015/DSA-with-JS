function rotateArrayK(arr,k){
    for(let i = 0;i<k;++i){
        arr.push(arr.shift());
    }
    return arr;
}
console.log(rotateArrayK([1,2,3,4,5],2));


function reverseArray(arr,start,end){
    while(start<end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}


function rotateArrayK1(arr,k){
    if(k>arr.length){
        k = k%arr.length;
    }
    reverseArray(arr,0,k-1);
    reverseArray(arr,k,arr.length-1);
    reverseArray(arr,0,arr.length-1);
    return arr;
}
console.log(rotateArrayK1([1,2,3,4,5],2));