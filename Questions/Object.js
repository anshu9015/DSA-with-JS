//  Easy Level Object Questions


// Count frequency of characters in a string using an object
// Input: "apple"
// Output: { a: 1, p: 2, l: 1, e: 1 }


// Check if two objects are shallowly equal
// Input: { a: 1, b: 2 }, { a: 1, b: 2 }
// Output: true


// Remove a property from an object
// Input: { a: 1, b: 2, c: 3 }, remove key: "b"
// Output: { a: 1, c: 3 }


// Convert an object to an array of key-value pairs
// Input: { a: 1, b: 2 }
// Output: [['a', 1], ['b', 2]]

// Convert an array of key-value pairs to an object
// Input: [['a', 1], ['b', 2]]
// Output: { a: 1, b: 2 }


// Clone a simple object
// Input: { a: 1, b: 2 }
// Output: Shallow copy using `{...obj}` or `Object.assign()`


// ⚙️ Medium Level Object Questions


// Flatten a nested object (1-level depth)
// Input: { a: 1, b: { c: 2, d: 3 } }
// Output: { a: 1, 'b.c': 2, 'b.d': 3 }


// Deep clone an object (without using JSON.parse/stringify)
// Asked in: Google, Amazon
// Input: { a: 1, b: { c: 2 } }
// Output: Deep copy without losing methods or Date objects



// Group array of objects by a key
// Asked in: Flipkart, Zomato
// Input: [{type: 'fruit', name: 'apple'}, {type: 'vegetable', name: 'carrot'}, {type: 'fruit', name: 'banana'}]
// Output: {
//   fruit: [{...}, {...}],
//   vegetable: [{...}]
// }


// Find the property with the highest value
// Input: { a: 10, b: 25, c: 15 }
// Output: b


// Count number of occurrences of values in array using object
// Asked in: Amazon, Paytm
// Input: ['apple', 'banana', 'apple', 'orange', 'banana']
// Output: { apple: 2, banana: 2, orange: 1 }


// Implement a custom Object.entries() function
// Input: { a: 1, b: 2 }
// Output: [['a', 1], ['b', 2]]



// Check if a given object is empty
// Input: {}
// Output: true


// Merge two objects
// Asked in: Razorpay, Groww
// Input: { a: 1 }, { b: 2, a: 3 }
// Output: { a: 3, b: 2 }



// Convert object values to uppercase (if string)
// Input: { name: 'anshu', age: 25 }
// Output: { name: 'ANSHU', age: 25 }



// 🧠 Bonus Real-World Challenge (Medium Level)
// Create a function that picks specific keys from an object
// pick({ name: 'Anshu', age: 25, city: 'Delhi' }, ['name', 'city'])
// // Output: { name: 'Anshu', city: 'Delhi' }


// Create a function that omits specific keys from an object
// omit({ name: 'Anshu', age: 25, city: 'Delhi' }, ['age'])
// // Output: { name: 'Anshu', city: 'Delhi' }



// Check if two objects are deeply equal
// Asked in: Adobe, PhonePe
// Input: { a: 1, b: { c: 2 } } and { a: 1, b: { c: 2 } }
// Output: true