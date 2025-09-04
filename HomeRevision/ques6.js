function ques1(arr) {
  let max = -Infinity;
  for (let val of arr) {
    if (val > max) {
      max = val;
    }
  }
  return max;
}
console.log(ques1([1, 3, 2, 5, 3, 6, 4]));

function ques2(arr) {
  let largest = arr[0];
  let sl = -Infinity;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > largest) {
      sl = largest;
      largest = arr[i];
    } else if (arr[i] > sl && arr[i] !== largest) {
      sl = arr[i];
    }
  }
  return sl;
}
console.log(ques2([1, 3, 2, 5, 3, 6, 4]));

function checkSorted(arr) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(checkSorted([1, 3, 2, 5, 3, 6, 4]));

function ques4(arr) {
  let result = [];
  for (let i = 0; i < arr.length; ++i) {
    let boolean = false;
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] === arr[j]) {
        boolean = true;
      }
    }
    if (!boolean) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(ques4([1, 3, 2, 5, 3, 6, 4]));

function remove(arr) {
  let newSet = new Set(arr);
  return [...newSet];
}
console.log(remove([1, 3, 2, 5, 3, 6, 4]));

function ques5(arr) {
  let;
}
