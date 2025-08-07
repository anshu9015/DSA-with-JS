let arr = [1, 2, 3, 4, 5];
let shallowArray = [...arr]; 

console.log(shallowArray);  //  [1, 2, 3, 4, 5]
console.log(arr); //  [1, 2, 3, 4, 5]

shallowArray[2] = 100;
console.log(shallowArray); // [1, 2, 100, 4, 5]
console.log(arr); //  [1, 2, 3, 4, 5]

let arr1 = [1, 2, 3, 4, [1, 2, 3]];
let shallowarray = [...arr1]; //  [1, 2, 3, 4, [1, 2, 3]]
console.log(shallowarray); //  [1, 2, 3, 4, [1, 2, 3]]
console.log(arr1);  //  [1, 2, 3, 4, [1, 2, 3]]
shallowarray[2] = 200;
console.log(shallowarray);  //  [1, 2, 200, 4, [1, 2, 3]]
console.log(arr1);  //  [1, 2, 3, 4, [1, 2, 3]]

shallowarray[4][1] = 300;
console.log(shallowarray);  //  [1, 2, 200, 4, [1, 300, 3]]
console.log(arr1);  //  [1, 2, 3, 4, [1, 300, 3]]

let deepArray = JSON.parse(JSON.stringify(arr1));
deepArray[4][1] = 400;
console.log(deepArray);  //  [1, 2, 3, 4, [1, 400, 3]]
console.log(arr1);  //  [1, 2, 3, 4, [1, 300, 3]]


// [ 1, 2, 3, 4, 5 ]
// [ 1, 2, 3, 4, 5 ]
// [ 1, 2, 100, 4, 5 ]
// [ 1, 2, 3, 4, 5 ]
// [ 1, 2, 3, 4, [ 1, 2, 3 ] ]
// [ 1, 2, 3, 4, [ 1, 2, 3 ] ]
// [ 1, 2, 200, 4, [ 1, 2, 3 ] ]
// [ 1, 2, 3, 4, [ 1, 2, 3 ] ]
// [ 1, 2, 200, 4, [ 1, 300, 3 ] ]
// [ 1, 2, 3, 4, [ 1, 300, 3 ] ]
// [ 1, 2, 3, 4, [ 1, 400, 3 ] ]
// [ 1, 2, 3, 4, [ 1, 300, 3 ] ]