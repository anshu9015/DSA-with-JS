console.log("begins");
setTimeout(() => {
  console.log("settimeout 1");
  Promise.resolve().then(() => {
    console.log("promise 1");
  });
}, 0);
new Promise(function (resolve, reject) {
  console.log("promise 2");
});
//begins
//promise2
//settimeout 1
//promise1
