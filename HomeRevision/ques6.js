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

function rotateByOne(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    let j = i + 1;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
console.log(rotateByOne([1, 3, 2, 5, 3, 6, 4]));

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}
console.log(reverse([1, 3, 2, 5, 3, 6, 4], 0, 6));

function rotateByD(arr, d) {
  if (d > arr.length) {
    d = d % arr.length;
  }
  reverse(arr, 0, d - 1);
  reverse(arr, d, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
  return arr;
}
console.log(rotateByD([1, 3, 2, 5, 3, 6, 4], 3));

function moveZeros(arr) {
  let count = 0;
  let result = [];
  for (let val of arr) {
    if (val === 0) {
      count++;
    } else {
      result.push(val);
    }
  }
  while (count !== 0) {
    result.push(0);
    count--;
  }
  return result;
}
console.log(
  moveZeros([1, 3, 2, 5, 3, 6, 4, 3, 0, 4, 0, 1, 0, 2, 4, 0, 0, 4, 7, 1])
);

function moveZeros1(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== 0) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }
  return arr;
}

console.log(
  moveZeros1([1, 3, 2, 5, 3, 6, 4, 3, 0, 4, 0, 1, 0, 2, 4, 0, 0, 4, 7, 1])
);

function linearSearch(arr, ele) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === ele) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 3, 2, 5, 3, 6, 4], 3));

function unionArray(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  return [...new Set(arr3)];
}
console.log(unionArray([1, 2, 3], [2, 3, 4]));

function unionArray1(arr1, arr2) {
  let set1 = new Set(arr1);
  for (let val of arr2) {
    if (!set1.has(val)) {
      set1.add(val);
    }
  }
  return [...set1];
}
console.log(unionArray1([1, 2, 3], [2, 3, 4]));

function intersectionArray(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set();
  for (let val of arr2) {
    if (set1.has(val)) {
      set2.add(val);
    }
  }
  return [...set2];
}
console.log(intersectionArray([1, 2, 3], [2, 3, 4]));

function missingNumber(arr, n) {
  let sum = (n * (n + 1)) / 2;
  let sum1 = 0;
  for (let val of arr) {
    sum1 += val;
  }
  return sum - sum1;
}
console.log(missingNumber([1, 2, 3], 4));
