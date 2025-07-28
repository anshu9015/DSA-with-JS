// function equalArray(arr1, arr2) {
//     let obj1 = {};
//     let obj2 = {};
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     else {
//         for (let i = 0; i < arr1.length; ++i) {
//             obj1[arr1[i]] = (obj1[arr1[i]] || 0) + 1;
//             obj2[arr2[i]] = (obj2[arr2[i]] || 0) + 1;
//         }
//         // console.log("OBJ1", obj1)

//         // console.log("OBJ2", obj2);
//         const keys1 = Object.keys(obj1);
//         const keys2 = Object.keys(obj2);
//         const values1 = Object.values(obj1);
//         const values2 = Object.values(obj2);
//         console.log(keys1);
//         console.log(keys2);
//         console.log(values1);
//         console.log(values2);

//         for(let ele of keys1){
//             if((keys1[ele] !== keys2[ele])){
//                 return false;
//             }
//         }
//         // for(let i = 0;i<keys1.length;++i){
//         //     if((keys1[i] !== keys2[i]) || (values1[i] !== values2[i])){
//         //         return false;
//         //     }
//         // }
//         return true

//         // for( let i=0 ;i<obj2.length;i++){
//         //     if(obj1[])
//         // }
//         // if(Object.keys(obj1) === Object.keys(obj2) && Object.values(obj1) === Object.values(obj2)){
//         //     return true;
//         // }
//         // else{
//         //     return false;
//         // }
//     }
// }

// console.log(equalArray([0], ['0']));

function sortingArray(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

function equalArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    sortingArray(arr1);
    sortingArray(arr2);
    for (let i = 0; i < arr1.length; ++i) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
}

console.log(equalArray([1, 2, 3, 4, 5, 8, 7], [1, 2, 3, 4, 5, 7, 8])); //output: true



function equalarray(arr1,arr2){
  if(arr1.length !== arr2.length) return false;
  let obj = {};
  for(let ele of arr1){
    obj[ele] = (obj[ele] || 0) + 1;
  }
  for(let ele of arr2){
    if(!obj[ele]){
      return false;
    }
    obj[ele]--;
  }
  return true;
}
console.log(equalarray([1, 2, 3, 4, 5, 8, 7], [1, 2, 3, 4, 5, 7, 8]))