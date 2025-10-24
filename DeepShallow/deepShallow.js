let arr = [1, 2, 3, 4, 5];
let shallowArray = [...arr];

console.log(shallowArray); //[1,2,3,4,5]
console.log(arr); //[1,2,3,4,5]

shallowArray[2] = 100;
console.log(shallowArray); //[1,2,100,4,5]
console.log(arr); //[1,2,3,4,5]

let arr1 = [1, 2, 3, 4, [1, 2, 3]];
let shallowarray = [...arr1];
console.log(shallowarray); //[1, 2, 3, 4, [1, 2, 3]];
console.log(arr1); //[1, 2, 3, 4, [1, 2, 3]];
shallowarray[2] = 200;
console.log(shallowarray); //[1, 2, 200, 4, [1, 2, 3]];
console.log(arr1); //[1, 2, 3, 4, [1, 2, 3]];

shallowarray[4][1] = 300;
console.log(shallowarray); //[1, 2, 3, 4, [1, 300, 3]];
console.log(arr1); //[1, 2, 3, 4, [1, 300, 3]];

let deepArray = JSON.parse(JSON.stringify(arr1));
deepArray[4][1] = 400;
console.log(deepArray); //[1, 2, 3, 4, [1, 400, 3]];
console.log(arr1); //[1, 2, 3, 4, [1, 300, 3]];

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

const obj1 = { a: 1, b: { c: 5 } };
// const obj2 = { ...obj1 };
// obj2.b.c = 99;
// console.log(obj2);
// console.log(obj1);

function jsonParseJsonStringify(obj) {
  let result = {};
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  for (let key in obj) {
    if (obj[key]) {
      result[key] = jsonParseJsonStringify(obj[key]);
    }
  }
  return result;
}
const obj2 = jsonParseJsonStringify(obj1);
obj2.b.c = 99;
console.log(obj2);
console.log(obj1);

// | Operation        | Main object | Nested objects |
// | ---------------- | ----------- | -------------- |
// | **Shallow copy** | Different   | Same reference |
// | **Deep copy**    | Different   | Different      |

let cop = [1, 2, 3, [6, 7, 8], 5];

// let cop2 = cop;
// cop2[3].pop();

console.log("cop", cop);
