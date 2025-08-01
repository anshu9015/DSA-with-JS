function allElementN3(arr) {
  let el;
  let pl;
  let count1 = 0;
  let count2 = 0;
  for (let val of arr) {
    if (count1 === 0) {
      count1 = 1;
      el = val;
    } else if (count2 === 0) {
      count2 = 1;
      pl = val;
    } else if (el === val) {
      count1++;
    } else if (pl === val) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }
  count1 = 0;
  count2 = 0;
  for (let val of arr) {
    if (val === el) {
      count1++;
    } else if (val === pl) {
      count2++;
    }
  }
  const result = [];
  if (count1 > Math.floor(arr.length / 3)) {
    result.push(el);
  } else if (count2 > Math.floor(arr.length / 3)) {
    result.push(pl);
  }
  return result.length > 0 ? result : [-1];
}

const arr = [1, 2, 1, 3, 3, 1];

console.log(allElementN3(arr));

function elementNk(arr, k) {
  const elemntK = new Map();
  for (let val of arr) {
    elemntK.set(val, (elemntK.get(val) || 0) + 1);
  }

  const result = [];
  for (let [key, value] of elemntK.entries()) {
    if (value > Math.floor(arr.length / k)) {
      result.push(key);
    }
  }
  return result;
}

console.log(elementNk([4, 5, 6, 7, 8, 4, 4, 5, 5, 5], 4));
