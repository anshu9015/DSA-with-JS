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

console.log(8); // 1 2 3 4 8 7 6 5

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

// ✅ Key Difference

// IIFE: You explicitly invoke a function right after defining it.

// Promise executor: You pass a function into new Promise, and JavaScript automatically invokes it immediately.

// So you can say:

// 👉 The executor of a Promise behaves like an IIFE — it runs immediately.
// But the Promise itself is not an IIFE, it’s a constructor that uses an IIFE-like behavior for its executor.

console.log("1");

setTimeout(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");
  });

  setTimeout(() => {
    console.log("4");
  }, 0);
}, 0);

Promise.resolve()
  .then(() => {
    console.log("5");

    return Promise.resolve();
  })
  .then(() => {
    console.log("6");

    queueMicrotask(() => {
      console.log("7");
    });
  });

queueMicrotask(() => {
  console.log("8");
});

console.log("9"); //1 9 5 8 6 7 2 3 4

//another problem

console.log("A");

setTimeout(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });

  queueMicrotask(() => {
    console.log("D");
  });
}, 0);

Promise.resolve()
  .then(() => {
    console.log("E");
  })
  .then(() => {
    console.log("F");

    setTimeout(() => {
      console.log("G");
    }, 0);
  });

queueMicrotask(() => {
  console.log("H");
});

console.log("I"); //a i e h f b c d g

console.log(1);

setTimeout(() => {
  console.log(2);

  Promise.resolve().then(() => {
    console.log(3);

    setTimeout(() => {
      console.log(4);
    }, 0);
  });
}, 0);

Promise.resolve()
  .then(() => {
    console.log(5);

    return Promise.resolve();
  })
  .then(() => {
    console.log(6);

    queueMicrotask(() => {
      console.log(7);
    });
  });

queueMicrotask(() => {
  console.log(8);

  Promise.resolve().then(() => {
    console.log(9);
  });
});

console.log(10); // 1 10 5 8 9 6 7 2 3 4

console.log("Start");

Promise.resolve().then(() => {
  console.log("P1");

  setTimeout(() => {
    console.log("T1");
  }, 0);

  Promise.resolve().then(() => {
    console.log("P2");
  });
});

setTimeout(() => {
  console.log("T2");

  Promise.resolve().then(() => {
    console.log("P3");
  });

  queueMicrotask(() => {
    console.log("Q1");
  });
}, 0);

queueMicrotask(() => {
  console.log("Q2");

  setTimeout(() => {
    console.log("T3");
  }, 0);
});

console.log("End"); // i predict first -->start end p1 q2 t1 p2 t3 t2 p3 q1. latest this--->start end p1 p2 q2 t1 t3 t2 p3 q1

console.log("1");

setTimeout(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");
  });

  queueMicrotask(() => {
    console.log("4");
  });

  setTimeout(() => {
    console.log("5");
  }, 0);
}, 0);

Promise.resolve()
  .then(() => {
    console.log("6");

    return Promise.resolve();
  })
  .then(() => {
    console.log("7");

    return Promise.resolve();
  })
  .then(() => {
    console.log("8");
  });

queueMicrotask(() => {
  console.log("9");

  Promise.resolve().then(() => {
    console.log("10");
  });
});

console.log("11"); //1 11 6 9 10 7 8 2 3 4 5

console.log("A");

setTimeout(() => {
  console.log("B");

  Promise.resolve()
    .then(() => {
      console.log("C");
    })
    .then(() => {
      console.log("D");
    });

  queueMicrotask(() => {
    console.log("E");
  });

  setTimeout(() => {
    console.log("F");
  }, 0);
}, 0);

Promise.resolve()
  .then(() => {
    console.log("G");

    queueMicrotask(() => {
      console.log("H");
    });

    return Promise.resolve();
  })
  .then(() => {
    console.log("I");
  });

queueMicrotask(() => {
  console.log("J");

  Promise.resolve().then(() => {
    console.log("K");
  });
});

console.log("L"); // a l g h j k i b c d e f
