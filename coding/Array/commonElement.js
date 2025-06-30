function frequencyElement(arr){
    let obj = {};
    for(let i = 0;i<arr.length;++i){
        obj[arr[i]] = (obj[arr[i]] || 0)+1;
    }

    // let arr2=[];

    // for(let ele of Object.keys(obj)){
    //     if(Object.values(obj)  < 1 ){

    //     }
    // }
    return Object.keys(obj);
}

function commonElement(arr1, arr2) {
    let arr3 = [];
    let removedArray1 = frequencyElement(arr1);
    let removedArray2 = frequencyElement(arr2);
    console.log(removedArray1);
    console.log(removedArray2);
    for (let i = 0; i < removedArray1.length; ++i) {
        for (let j = 0; j < removedArray2.length; ++j) {
            if (removedArray1[i] === removedArray2[j]) {
                arr3.push(removedArray2[j]);
            }
        }
    }

    return arr3;
}

console.log(commonElement([1, 2, 3, 2], [3, 5, 6, 8, 2]));