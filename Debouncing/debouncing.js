function debouncing(fn, delay) {
  return function (...args) {
    console.log("ARGS", args);
    // clearTimeout(timer);
    console.log(fn);
    setTimeout(() => {
      console.log(fn.apply(this, args));
      console.log("first", fn.apply(this, args));
    }, delay);
  };
}

function add(a, b) {
  return a + b;
}

const debouncedAdd = debouncing(add, 2000);
console.log("second", debouncedAdd(2, 3));
