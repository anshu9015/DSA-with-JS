function ques1(str) {
  const obj = {};
  for (let i = 0; i < str.length; ++i) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }
  return obj;
}
console.log(ques1("apple"));

function checkShallowlyEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  if (key1.length !== key2.length) {
    return false;
  }
  for (let [key, values] of Object.entries(obj1)) {
    if (obj2[key] !== values) {
      return false;
    }
  }
  return true;
}
console.log(checkShallowlyEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));

function removeKey(obj, key1) {
  const obj1 = {};
  for (let key in obj) {
    if (key === key1) {
      continue;
    }
    obj1[key] = obj[key];
  }
  return obj1;
}
console.log(removeKey({ a: 1, b: 2, c: 3 }, "b"));

function objectToArray(obj) {
  //   return Object.entries(obj);
  const result = [];
  for (let key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}
console.log("objectToArray", objectToArray({ a: 1, b: 2 }));

function ArrayToObject(arr) {
  //   return Object.fromEntries(arr);
  let result = {};
  for (let [key, value] of arr) {
    result[key] = value;
  }
  return result;
}
console.log(
  "ArrayToObject----->",
  ArrayToObject([
    ["a", 1],
    ["b", 2],
  ])
);

function cloneObject(obj) {
  const obj1 = { ...obj };
  const obj2 = Object.assign(obj);
  return { obj1, obj2 };
}
console.log(cloneObject({ a: 1, b: 2 }));
// ⚙️ Medium Level Object Questions

// Flatten a nested object (1-level depth)                                                        done
// Input: { a: 1, b: { c: 2, d: 3 } }
// Output: { a: 1, 'b.c': 2, 'b.d': 3 }
function flatenObject(obj) {
  const result = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      for (let key1 in obj[key]) {
        result[`${key}.${key1}`] = obj[key][key1];
      }
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}
console.log(
  "flattenObject=======>>>>>>>>>>>",
  flatenObject({ a: 1, b: { c: 2, d: 3 } })
);
// Deep clone an object (without using JSON.parse/stringify)                                        done
// Asked in: Google, Amazon
// Input: { a: 1, b: { c: 2 } }
// Output: Deep copy without losing methods or Date objects

function arrayObjectByKey(arr, key1) {
  const result = {};
  for (let i = 0; i < arr.length; ++i) {
    // for (let key in arr[i]) {
    //   if (arr[i][key] === arr[i][key1]) {
    //     let newArray = [];
    //     newArray.push(arr[i]);
    //     result[arr[i][key]] = newArray;
    //   }
    // }
    let key = arr[i][key1];
    if (result[key]) {
      result[key].push(arr[i]);
    } else {
      let newArray = [];
      newArray.push(arr[i]);
      result[key] = newArray;
    }
  }
  return result;
}
console.log(
  "arrayobjectbykey------->>>>>",
  arrayObjectByKey(
    [
      { type: "fruit", name: "apple" },
      { type: "vegetable", name: "carrot" },
      { type: "fruit", name: "banana" },
    ],
    "type"
  )
);
function highestValue(obj) {
  let max = -Infinity;
  let maxElement;
  for (let key in obj) {
    if (max < obj[key]) {
      max = obj[key];
      maxElement = key;
    }
  }
  return maxElement;
}
console.log(highestValue({ a: 10, b: 25, c: 15 }));

function frequencyArrayElement(arr) {
  const obj = {};
  for (let key of arr) {
    obj[key] = (obj[key] || 0) + 1;
  }
  return obj;
}
console.log(
  frequencyArrayElement(["apple", "banana", "apple", "orange", "banana"])
);

function checkEmpty(obj) {
  const key = Object.keys(obj);
  if (key.length) {
    return false;
  }
  return true;
}
console.log(checkEmpty({}));

function mergeObject(obj1, obj2) {
  const result = {};
  for (let key in obj1) {
    result[key] = obj1[key];
  }
  for (let key in obj2) {
    result[key] = obj2[key];
  }
  return result;
}
console.log("mergeObject----====>>>>>>", mergeObject({ a: 1 }, { b: 2, a: 3 }));

function uppercase(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      let newString = "";
      for (let i = 0; i < obj[key].length; ++i) {
        // const char = obj[key][i];
        if (obj[key].charCodeAt(i) >= 97 && obj[key].charCodeAt(i) <= 122) {
          newString += String.fromCharCode(obj[key].charCodeAt(i) - 32);
        } else {
          newString += obj[key][i];
        }
      }
      obj[key] = newString;
    }
  }
  return obj;
}
console.log("uppercase-------->>>>>>", uppercase({ name: "anshu", age: 25 }));

function pick(obj, arr) {
  const result = {};
  for (let key in obj) {
    for (let key1 of arr) {
      if (key === key1) {
        // continue;
        result[key] = obj[key];
      }
    }
  }
  return result;
}
console.log(pick({ name: "Anshu", age: 25, city: "Delhi" }, ["name", "city"]));

function omit(obj, arr) {
  const result = {};
  for (let key in obj) {
    for (let key1 of arr) {
      if (key === key1) {
        continue;
      }
      result[key] = obj[key];
    }
  }
  return result;
}
console.log(omit({ name: "Anshu", age: 25, city: "Delhi" }, ["age"]));
// Check if two objects are deeply equal                                                                        done
// Asked in: Adobe, PhonePe
// Input: { a: 1, b: { c: 2 } } and { a: 1, b: { c: 2 } }
// Output: true
// let obj1 = { a: 1, b: { c: 2 } };
// let obj2 = { ...obj1 };
// let obj3 = JSON.parse(JSON.stringify(obj1));
// obj3.b.c = 99;
// console.log(obj3);
// console.log(obj1);
// { a: 1, b: { c: 99 } }
// { a: 1, b: { c: 2 } }

function customDeeply(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  const result = {};
  for (let key in obj) {
    if (obj[key]) {
      result[key] = customDeeply(obj[key]);
    }
  }
  return result;
}
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = { ...obj1 };
// let obj3 = JSON.parse(JSON.stringify(obj1));
let obj3 = customDeeply(obj1);
obj3.b.c = 99;
console.log(obj3);
console.log(obj1);
