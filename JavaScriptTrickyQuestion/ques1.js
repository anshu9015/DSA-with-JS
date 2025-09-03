const promise = new Promise((resolve) => {
  console.log(1);
  resolve();
  console.log(2);
});

console.log(3);
console.log(4);

setTimeout(() => {
  console.log(5);
}, 100);

setTimeout(() => {
  console.log(6);
}, 0);

promise.then(() => {
  console.log(7);
});

console.log(8);

// Step 1: Run synchronous code (main stack)

// new Promise(...) executes immediately:

// console.log(1) → prints 1

// resolve() schedules the .then(...) callback in the microtask queue

// console.log(2) → prints 2

// Back to main thread:

// console.log(3) → prints 3

// console.log(4) → prints 4

// setTimeout(..., 100) → schedules callback for later (macrotask)

// setTimeout(..., 0) → schedules callback (macrotask, but still after microtasks)

// promise.then(...) → callback goes into microtask queue

// console.log(8) → prints 8

// So after synchronous execution, we have printed:
// 👉 1, 2, 3, 4, 8

// Step 2: Run Microtasks (before macrotasks)

// promise.then(...) runs now:

// console.log(7) → prints 7

// 👉 Sequence so far: 1, 2, 3, 4, 8, 7

// Step 3: Run Macrotasks (setTimeouts)

// First macrotask: setTimeout(..., 0) → prints 6

// Next macrotask: setTimeout(..., 100) → prints 5
