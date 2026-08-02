console.log("A");

Promise.resolve().then(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });
});

queueMicrotask(() => {
  console.log("D");
});

console.log("E"); // a, e , b, d , c

console.log(1);

Promise.resolve().then(() => {
  console.log(2);

  queueMicrotask(() => {
    console.log(3);
  });
});

Promise.resolve().then(() => {
  console.log(4);
});

console.log(5); // 1,5, 2,3,4

console.log("Start");

Promise.resolve()
  .then(() => {
    console.log("P1");

    return Promise.resolve();
  })
  .then(() => {
    console.log("P2");
  });

queueMicrotask(() => {
  console.log("Q1");
});

console.log("End"); // start, p1, q1, p2

console.log(1);

queueMicrotask(() => {
  console.log(2);

  Promise.resolve().then(() => {
    console.log(3);
  });
});

queueMicrotask(() => {
  console.log(4);
});

console.log(5); //1 ,5, 2, 4, 3

console.log("A");

Promise.resolve().then(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });

  queueMicrotask(() => {
    console.log("D");
  });
});

console.log("E"); //a,e,b,d,c
