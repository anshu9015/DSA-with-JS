// Count frequency of characters in a string using an object
// Input: "apple"
// Output: { a: 1, p: 2, l: 1, e: 1 }

function characterFrequency(str) {
  let obj = {};
  for (let ch of str) {
    obj[ch] = (obj[ch] || 0) + 1;
  }
  return obj;
}
console.log(characterFrequency("apple"));

// Check if two objects are shallowly equal
// Input: { a: 1, b: 2 }, { a: 1, b: 2 }
// Output: true

function checkShallowlyEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  if (key1.length !== key2.length) {
    return false;
  }
  for (let [key, value] of Object.entries(obj1)) {
    if (obj2[key] !== value) {
      return false;
    }
  }
  return true;
}
console.log(checkShallowlyEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));

// Remove a property from an object
// Input: { a: 1, b: 2, c: 3 }, remove key: "b"
// Output: { a: 1, c: 3 }
function removeKey(obj, key1) {
  let obj1 = {};
  for (let [key, value] of Object.entries(obj)) {
    if (key === key1) {
      continue;
    }
    obj1[key] = value;
  }
  return obj1;
}
console.log(removeKey({ a: 1, b: 2, c: 3 }, "b"));

function removeKey1(obj, key1) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => key !== key1)
  );
}
console.log(removeKey1({ a: 1, b: 2, c: 3 }, "b"));

// Convert an object to an array of key-value pairs
// Input: { a: 1, b: 2 }
// Output: [['a', 1], ['b', 2]]
let obj1 = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj1));

// Convert an array of key-value pairs to an object
// Input: [['a', 1], ['b', 2]]
// Output: { a: 1, b: 2 }
function convertArrayToObject(arr) {
  return Object.fromEntries(arr);
}
console.log(
  convertArrayToObject([
    [1, "a"],
    ["b", 2],
  ])
);

function convertArrayToObject1(arr) {
  let obj = {};
  for (let [key, value] of arr) {
    obj[key] = value;
  }
  return obj;
}
console.log(
  convertArrayToObject1([
    ["a", 1],
    ["b", 2],
  ])
);
// Clone a simple object
// Input: { a: 1, b: 2 }
// Output: Shallow copy using `{...obj}` or `Object.assign()`

function cloneObject(obj) {
  let obj1 = { ...obj };
  return obj1;
}
console.log(cloneObject({ a: 1, b: 2 }));
function cloneObject1(obj) {
  return Object.assign(obj);
}
console.log(cloneObject1({ a: 1, b: 2 }));

// Flatten a nested object (1-level depth)
// Input: { a: 1, b: { c: 2, d: 3 } }
// Output: { a: 1, 'b.c': 2, 'b.d': 3 }
function nestedObject(obj) {
  let result = {};
  for (let key in obj) {
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      for (let subkey in obj[key]) {
        result[`${key}.${subkey}`] = obj[key][subkey];
      }
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}
console.log(nestedObject({ a: 1, b: { c: 2, d: 3 } }));

// Deep clone an object (without using JSON.parse/stringify)
// Asked in: Google, Amazon
// Input: { a: 1, b: { c: 2 } }
// Output: Deep copy without losing methods or Date objects
const obj = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2, e: 4 }, f: { g: { h: 8 } } };
function deepCopy(obj) {
  const obj1 = JSON.parse(JSON.stringify(obj));
  return obj1;
}
// console.log(deepCopy({ a: 1, b: { c: 2 } }));
//for only 1 nested loop
function deepCopy1(obj) {
  let result = {};
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      result[key] = {};
      for (let subkey in obj[key]) {
        result[key][subkey] = obj[key][subkey];
      }
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}
// let copy = deepCopy(obj);
// let copy1 = deepCopy1(obj2);
// // let copy = { ...obj };
// copy1.f.g.h = 99;
// copy.b.c = 9;
// // console.log("main object----->", obj);
// // console.log("copy object======>", copy);
// console.log("main object----->", obj2);
// console.log("copy object======>", copy1);
// console.log(deepCopy1({ a: 1, b: { c: 2, e: 4 }, f: { g: { h: 8 } } }));

// Find the property with the highest value
// Input: { a: 10, b: 25, c: 15 }
// Output: b
function highestFrequency(obj) {
  let max = -Infinity;
  let ans;
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      ans = key;
    }
  }

  return ans;
}
console.log(highestFrequency({ a: 10, b: 25, c: 15 }));

// Count number of occurrences of values in array using object
// Asked in: Amazon, Paytm
// Input: ['apple', 'banana', 'apple', 'orange', 'banana']
// Output: { apple: 2, banana: 2, orange: 1 }

function countArrayElementFrequency(arr) {
  let obj = {};
  for (let val of arr) {
    obj[val] = (obj[val] || 0) + 1;
  }
  return obj;
}
console.log(
  countArrayElementFrequency(["apple", "banana", "apple", "orange", "banana"])
);
//for multiple nested loop
function nestedDeepCopyClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  const result = {};
  for (let key in obj) {
    if (obj[key]) {
      result[key] = nestedDeepCopyClone(obj[key]);
    }
  }
  return result;
}
let copy3 = nestedDeepCopyClone(obj2);
// let copy = { ...obj };
copy3.f.g.h = 99;
// copy.b.c = 9;
// console.log("main object----->", obj);
// console.log("copy object======>", copy);
console.log("main object----->", obj2);
console.log("copy object======>", copy3);
console.log(nestedDeepCopyClone(obj2));

function flattendArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length; ++i) {
    if (Array.isArray(arr[i])) {
      let flatArray = flattendArray(arr[i]);
      result.push(...flatArray);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flattendArray([1, [2, 3, [4, 5, 6]]]));

function deepCloning(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCloning(item));
  }
  if (obj instanceof Map) {
    const map = new Map();
    for (let [key, value] of obj.entries()) {
      map.set(key, deepCloning(value));
      return map;
    }
  }
  if (obj instanceof Set) {
    const map = new Set();
    for (let item of obj.values()) {
      map.add(deepCloning(item));
    }
    return map;
  }
  const map = {};
  for (let key in obj) {
    if (obj[key]) {
      map[key] = deepCloning(obj[key]);
    }
  }
  return map;
}
const obj4 = {
  a: 1,
  b: { c: 2 },
  d: new Date(),
  e: function () {
    return "hi";
  },
  f: [1, 2, { g: 3 }],
  g: new Map([["x", 10]]),
  h: new Set([1, 2, 3]),
};

const copy4 = deepCloning(obj4);
copy4.b.c = 99;

console.log(copy4); // Deep cloned object
console.log(obj4);

function customObjectEntries(obj) {
  const res = [];
  for (let key in obj) {
    res.push([key, obj[key]]);
  }
  return res;
}
console.log(customObjectEntries({ a: 1, b: 2 }));

function objectFromEntries(arr) {
  const obj = {};
  for (let [key, value] of arr) {
    obj[key] = value;
  }
  return obj;
}
console.log(
  objectFromEntries([
    ["a", 1],
    ["b", 2],
  ])
);

// Check if a given object is empty
// Input: {}
// Output: true
function checkEmpty(obj) {
  let keys = Object.keys(obj);
  if (keys.length === 0) {
    return true;
  }
  return false;
}
console.log(checkEmpty({ a: 1, b: 2 }));
console.log(checkEmpty({}));

// Create a function that omits specific keys from an object
// omit({ name: 'Anshu', age: 25, city: 'Delhi' }, ['age'])
// // Output: { name: 'Anshu', city: 'Delhi' }

function omitSpecificKeys(obj, keys) {
  let obj1 = {};
  for (let key in obj) {
    if (keys.includes(key)) {
      continue;
    }
    obj1[key] = obj[key];
  }
  return obj1;
}
console.log(
  omitSpecificKeys({ name: "Anshu", age: 25, city: "Delhi" }, ["age"])
);

// Create a function that picks specific keys from an object
// pick({ name: 'Anshu', age: 25, city: 'Delhi' }, ['name', 'city'])
// // Output: { name: 'Anshu', city: 'Delhi' }
function pickSpecificKey(obj, keys) {
  const obj1 = {};
  const set = new Set(keys);
  for (let key in obj) {
    if (set.has(key)) {
      obj1[key] = obj[key];
    }
  }
  return obj1;
}
console.log(
  pickSpecificKey({ name: "Anshu", age: 25, city: "Delhi" }, ["name", "city"])
);

// Convert object values to uppercase (if string)
// Input: { name: 'anshu', age: 25 }
// Output: { name: 'ANSHU', age: 25 }

function converStringToUpperCase(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      let newString = "";
      for (let i = 0; i < obj[key].length; ++i) {
        const code = obj[key].charCodeAt(i);
        if (code >= 97 && code <= 122) {
          newString += String.fromCharCode(code - 32);
        } else {
          newString += obj[key][i];
        }
      }
      obj[key] = newString;
    }
  }
  return obj;
}
console.log(converStringToUpperCase({ name: "anshu", age: 25 }));

// Check if two objects are deeply equal
// Asked in: Adobe, PhonePe
// Input: { a: 1, b: { c: 2 } } and { a: 1, b: { c: 2 } }
// Output: true
function checkDeeplyEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  if (key1.length !== key2.length) {
    return false;
  }
  for (let key of key1) {
    if (!checkDeeplyEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}
console.log(checkDeeplyEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));

// Merge two objects
// Asked in: Razorpay, Groww
// Input: { a: 1 }, { b: 2, a: 3 }
// Output: { a: 3, b: 2 }
function mergeTwoObject(obj1, obj2) {
  let result = {};
  for (let key in obj1) {
    result[key] = obj1[key];
  }
  for (let key in obj2) {
    result[key] = obj2[key];
  }
  return result;
}
console.log(mergeTwoObject({ a: 1 }, { b: 2, a: 3 }));

// Group array of objects by a key
// Asked in: Flipkart, Zomato
// Input: [{type: 'fruit', name: 'apple'}, {type: 'vegetable', name: 'carrot'}, {type: 'fruit', name: 'banana'}]
// Output: {
//   fruit: [{...}, {...}],
//   vegetable: [{...}]
// }
function groupByKey(arr, key) {
  const result = {};
  for (let obj of arr) {
    const groupKey = obj[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(obj);
  }
  return result;
}
console.log(
  groupByKey(
    [
      { type: "fruit", name: "apple" },
      { type: "vegetable", name: "carrot" },
      { type: "fruit", name: "banana" },
    ],
    "type"
  )
);
