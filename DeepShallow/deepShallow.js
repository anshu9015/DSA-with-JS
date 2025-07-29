let arr = [1,2,3,4,5];
let shallowArray = [...arr];

// console.log(shallowArray);
// console.log(arr);

shallowArray[2] = 100;
console.log(shallowArray)
console.log(arr)

let arr1 = [1,2,3,4,[1,2,3]];
let shallowarray = [...arr1];
// console.log(shallowarray);
// console.log(arr1);

shallowarray[2] = 200
// console.log(shallowarray);
// console.log(arr1);

// shallowarray[4][1] = 300;
// console.log(shallowarray);
// console.log(arr1);

let deepArray = JSON.parse(JSON.stringify(arr1));
deepArray[4][1] = 400;
console.log(deepArray);
console.log(arr1);


