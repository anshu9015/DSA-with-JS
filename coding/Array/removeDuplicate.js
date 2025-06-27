function removeDuplicate(arr){
    let arr1 = [];
    for(let i = 0;i<arr.length;++i){
        let found = false;
        for(let j = i+1;j<arr.length;++j){
            if(arr[i] === arr[j]){
                found = true;
                break;
            }
        }
        if(!found){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

console.log(removeDuplicate([2,3,4,2,5]));