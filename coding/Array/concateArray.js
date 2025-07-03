function concateArray(arr1,arr2,arr3){
    arr1.push(...arr2,...arr3);
    return arr1;
}
console.log(concateArray([1,2],[3,4],[5,6]));


function flatArray(arr){
    return arr.flat();
}

console.log(flatArray([[1,2],[3,4],[5,6]]));

function flatArray1(arr){
    let arr1= [];
    for(let i = 0;i<arr.length;++i){
        if(Array.isArray(arr[i])){
            let flattendArray = flatArray(arr[i]);
            arr1.push(...flattendArray);
        }
        else{
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

const arr4 = [1,2,[3,4],[5,6,7]];

console.log(flatArray(arr4));