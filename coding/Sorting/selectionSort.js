function selectionSort(arr){
    for(let i = 0;i<arr.length-1;++i){
        let minIndex = i;
        for(let j = i+1;j<arr.length;++j){
            if(arr[j]<arr[minIndex]) minIndex = j;          
            
        }
        if(minIndex !== i) [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
    }
    return arr;
}

console.log(selectionSort([2,1,3,4,65,6,8,2,3]))
