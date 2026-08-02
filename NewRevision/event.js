// console.log("1");

// setTimeout(() => {
//   console.log("2");

//   Promise.resolve().then(() => {
//     console.log("3");
//   });

//   queueMicrotask(() => {
//     console.log("4");
//   });

//   setTimeout(() => {
//     console.log("5");
//   }, 0);
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("6");

//     return Promise.resolve();
//   })
//   .then(() => {
//     console.log("7");

//     return Promise.resolve();
//   })
//   .then(() => {
//     console.log("8");
//   });

// queueMicrotask(() => {
//   console.log("9");

//   Promise.resolve().then(() => {
//     console.log("10");
//   });
//   Promise.resolve().then(() => {
//     console.log("19");
//   });
// });

// console.log("11");

//another question

// console.log("Start");

// Promise.resolve().then(() => {
//   console.log("P1");

//   setTimeout(() => {
//     console.log("T1");
//   }, 0);

//   Promise.resolve().then(() => {
//     console.log("P2");
//   });
// });

// setTimeout(() => {
//   console.log("T2");

//   Promise.resolve().then(() => {
//     console.log("P3");
//   });

//   queueMicrotask(() => {
//     console.log("Q1");
//   });
// }, 0);

// queueMicrotask(() => {
//   console.log("Q2");

//   setTimeout(() => {
//     console.log("T3");
//   }, 0);
// });

// console.log("End");

// console.log("1");

// setTimeout(() => {
//   console.log("2");

//   Promise.resolve().then(() => {
//     console.log("3");

//     queueMicrotask(() => {
//       console.log("4");
//     });
//   });

//   queueMicrotask(() => {
//     console.log("5");

//     Promise.resolve().then(() => {
//       console.log("6");
//     });
//   });

//   setTimeout(() => {
//     console.log("7");
//   }, 0);
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("8");

//     queueMicrotask(() => {
//       console.log("9");
//     });

//     return Promise.resolve();
//   })
//   .then(() => {
//     console.log("10");

//     Promise.resolve().then(() => {
//       console.log("11");
//     });

//     return Promise.resolve();
//   })
//   .then(() => {
//     console.log("12");
//   });

// queueMicrotask(() => {
//   console.log("13");

//   Promise.resolve().then(() => {
//     console.log("14");

//     queueMicrotask(() => {
//       console.log("15");
//     });
//   });

//   setTimeout(() => {
//     console.log("16");
//   }, 0);
// });

// console.log("17");

// console.log("A");

// Promise.resolve()
//   .then(() => {
//     console.log("B");

//     queueMicrotask(() => {
//       console.log("C");

//       Promise.resolve().then(() => {
//         console.log("D");
//       });
//     });

//     return Promise.resolve();
//   })
//   .then(() => {
//     console.log("E");

//     setTimeout(() => {
//       console.log("F");

//       queueMicrotask(() => {
//         console.log("G");
//       });
//     }, 0);

//     return Promise.resolve();
//   })
//   .then(() => {
//     console.log("H");
//   });

// queueMicrotask(() => {
//   console.log("I");

//   Promise.resolve().then(() => {
//     console.log("J");

//     queueMicrotask(() => {
//       console.log("K");
//     });
//   });

//   setTimeout(() => {
//     console.log("L");
//   }, 0);
// });

// setTimeout(() => {
//   console.log("M");

//   Promise.resolve().then(() => {
//     console.log("N");

//     queueMicrotask(() => {
//       console.log("O");
//     });
//   });
// }, 0);

// console.log("P");

console.log("1");

async function first() {
  console.log("2");

  await Promise.resolve();

  console.log("3");

  queueMicrotask(() => {
    console.log("4");

    Promise.resolve().then(() => {
      console.log("5");
    });
  });

  return Promise.resolve();
}

Promise.resolve()
  .then(() => {
    console.log("6");

    return first();
  })
  .then(() => {
    console.log("7");

    queueMicrotask(() => {
      console.log("8");

      Promise.resolve().then(() => {
        console.log("9");
      });
    });

    return Promise.resolve();
  })
  .then(() => {
    console.log("10");
  });

queueMicrotask(() => {
  console.log("11");

  Promise.resolve().then(() => {
    console.log("12");

    queueMicrotask(() => {
      console.log("13");
    });
  });

  setTimeout(() => {
    console.log("14");

    Promise.resolve().then(() => {
      console.log("15");
    });
  }, 0);
});

setTimeout(() => {
  console.log("16");

  Promise.resolve().then(() => {
    console.log("17");

    queueMicrotask(() => {
      console.log("18");
    });
  });

  queueMicrotask(() => {
    console.log("19");
  });
}, 0);

console.log("20");
