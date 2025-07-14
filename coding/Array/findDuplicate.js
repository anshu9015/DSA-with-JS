function findDuplicate(arr){
    let arr2 = [];
    for(let i = 0;i<arr.length-1;++i){
        let found = false;
        for(let j = i+1;j<arr.length;++j){
            if(arr[i] === arr[j]){
                found = true;
                if(found){
                    arr2.push(arr[j]);
                }
                break;
            }
        }
    }
    return arr2;
}

const arr1 = [1,2,2,3,4,4,5,5]; //output: [2,4,5]

console.log(findDuplicate(arr1));