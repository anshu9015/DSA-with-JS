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
