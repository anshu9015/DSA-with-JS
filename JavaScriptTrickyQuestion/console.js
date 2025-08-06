console.log("begins");
setTimeout(() => {//microtasks queue
  console.log("settimeout 1");
  Promise.resolve().then(() => {//macrotasks (highest priority)
    console.log("promise 1");
  });
}, 0);
new Promise(function (resolve, reject) { //macrotaskqueue (highest priority)
  console.log("promise 2");
});

//begins
//promise 2
//settimeout 1
//promise 1

