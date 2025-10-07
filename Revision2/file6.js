function ques1(str) {
  const obj = {};
  for (let key of str) {
    obj[key] = (obj[key] || 0) + 1;
  }
  return obj;
}
console.log(ques1("apple"));

function ques14(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let [key, value] of Object.entries(obj1)) {
    if (obj2[key] !== value) {
      return false;
    }
  }
  return true;
}
console.log("shallow copy", ques14({ a: 1, b: 2 }, { a: 1, b: 2 }));

function ques3(obj, key1) {
  const obj1 = {};
  for (let key in obj) {
    if (key === key1) {
      continue;
    }
    obj1[key] = obj[key];
  }
  return obj1;
}
console.log(ques3({ a: 1, b: 2, c: 3 }, "b"));

function ques4(obj) {
  return Object.entries(obj);
}
console.log(ques4({ a: 1, b: 2, c: 3 }));

function ques5(arr) {
  return Object.fromEntries(arr);
}
console.log(
  ques5([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
);

function ques6(obj) {
  const obj1 = Object.assign(obj);
  return obj1;
}
console.log(ques6({ a: 1, b: 2, c: 3 }));
// ⚙️ Medium Level Object Questions

// Flatten a nested object (1-level depth)                                                        done
// Input: { a: 1, b: { c: 2, d: 3 } }
// Output: { a: 1, 'b.c': 2, 'b.d': 3 }

// Deep clone an object (without using JSON.parse/stringify)                                        done
// Asked in: Google, Amazon
// Input: { a: 1, b: { c: 2 } }
// Output: Deep copy without losing methods or Date objects

// Group array of objects by a key                                                                                             done
// Asked in: Flipkart, Zomato
// Input: [{type: 'fruit', name: 'apple'}, {type: 'vegetable', name: 'carrot'}, {type: 'fruit', name: 'banana'}]
// Output: {
//   fruit: [{...}, {...}],
//   vegetable: [{...}]
// }

function ques7(obj) {
  let highestFrequency = -Infinity;
  let maxElement;
  for (let [key, value] of Object.entries(obj)) {
    if (value > highestFrequency) {
      highestFrequency = value;
      maxElement = key;
    }
  }
  return maxElement;
}
console.log(ques7({ a: 10, b: 25, c: 15 }));

function ques8(arr) {
  const obj = {};
  for (let ele of arr) {
    obj[ele] = (obj[ele] || 0) + 1;
  }
  return obj;
}
console.log(ques8(["apple", "banana", "apple", "orange", "banana"]));

function ques12(obj) {
  let res = [];
  for (let [key, value] of Object.entries(obj)) {
    res.push([key, value]);
  }
  return res;
}
console.log(ques12({ a: 1, b: 2 }));

function ques9(obj) {
  const keys = Object.keys(obj);
  if (keys.length) {
    return false;
  }
  return true;
}
console.log(ques9({}));

function ques13(obj1, obj2) {
  const obj3 = {};
  for (let key in obj1) {
    obj3[key] = obj1[key];
  }
  for (let key in obj2) {
    obj3[key] = obj2[key];
  }
  return obj3;
}
console.log(ques13({ a: 1 }, { b: 2, a: 3 }));

// Convert object values to uppercase (if string)                                                               done
// Input: { name: 'anshu', age: 25 }
// Output: { name: 'ANSHU', age: 25 }

function ques11(obj, arr) {
  const obj1 = {};
  for (let keys of Object.keys(obj)) {
    for (let ele of arr) {
      if (keys === ele) {
        obj1[keys] = obj[keys];
      }
    }
  }
  return obj1;
}
console.log(
  ques11({ name: "Anshu", age: 25, city: "Delhi" }, ["name", "city"])
);

function ques10(obj, arr) {
  const obj1 = {};
  for (let keys of Object.keys(obj)) {
    for (let ele of arr) {
      if (keys === ele) {
        continue;
      }
      obj1[keys] = obj[keys];
    }
  }
  return obj1;
}
console.log(ques10({ name: "Anshu", age: 25, city: "Delhi" }, ["age"]));
// Check if two objects are deeply equal                                                                        done
// Asked in: Adobe, PhonePe
// Input: { a: 1, b: { c: 2 } } and { a: 1, b: { c: 2 } }
// Output: true
