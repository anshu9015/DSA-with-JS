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

function multipleMissing(arr, n) {
  let set = new Set(arr);
  let set1 = new Set();
  for (let i = 1; i <= n; ++i) {
    if (!set.has(i)) {
      set1.add(i);
    }
  }
  return [...set1];
}
console.log(multipleMissing([1, 3, 4, 2], 8));

function maximumConsecutiveOnes(arr) {
  let max = -Infinity;
  let count = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === 1) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 0;
    }
  }
  return max;
}
console.log(maximumConsecutiveOnes([1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2]));

function appearOnce(arr) {
  let map = new Map();
  let result;
  for (let i = 0; i < arr.length; ++i) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  for (let [key, values] of map.entries()) {
    if (values === 1) {
      result = key;
    }
  }
  return result;
}
console.log(appearOnce([4, 1, 2, 1, 2]));

function appearOnce1(arr) {
  let XORR = 0;
  for (let val of arr) {
    XORR = XORR ^ val;
  }
  return XORR;
}
console.log(appearOnce1([4, 1, 2, 1, 2]));

function subArray(arr) {
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i; j < arr.length; ++j) {
      res.push(arr.slice(i, j + 1));
    }
  }
  return res;
}
console.log(subArray([1, 2, 3]));

function longestSubArrayK(arr, k) {
  let length = -Infinity;
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i; j < arr.length; ++j) {
      let sum = 0;
      for (let k = i; k <= j; ++k) {
        sum += arr[k];
      }
      if (sum === k) {
        length = Math.max(length, j - i + 1);
      }
    }
  }
  return length;
}
console.log(longestSubArrayK([1, -2, 3, 2, -2], 1));

function longestSubArraySumK(arr, k) {
  let length = -Infinity;
  for (let i = 0; i < arr.length; ++i) {
    let sum = 0;
    for (let j = i; j < arr.length; ++j) {
      sum += arr[j];
      if (sum === k) {
        length = Math.max(length, j - i + 1);
      }
    }
  }
  return length;
}
console.log(longestSubArraySumK([1, -2, 3, 2, -2], 1));

function longSubarrayK(arr, k) {
  let prefixSum = 0;
  let length = 0;
  let map = new Map();
  for (let i = 0; i < arr.length; ++i) {
    prefixSum += arr[i];
    if (prefixSum === k) {
      length = Math.max(length, i + 1);
    }
    if (map.has(prefixSum - k)) {
      length = Math.max(length, i - map.get(prefixSum - k));
    }
    if (!map.has(prefixSum)) {
      map.set(prefixSum, i);
    }
  }
  return length;
}

console.log(longSubarrayK([1, -2, 3, 2, -2], 1));

function longestSubArraykSum(arr, k) {
  let map = new Map();
  let currentSum = 0;
  let length = 0;
  let start = 0;
  let end = -1;
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    currentSum += arr[i];
    if (currentSum === k && i + 1 > length) {
      length = i + 1;
      start = 0;
      end = i + 1;
    }
    if (map.has(currentSum - k)) {
      let startIndex = map.get(currentSum - k) + 1;
      if (startIndex > length) {
        length = Math.max(length, i - startIndex - 1);
        start = startIndex;
        end = i;
      }
    }
    if (!map.has(currentSum)) {
      map.set(currentSum, i);
    }
  }
  if (end !== -1) {
    res.push(arr.slice(start, end));
  }
  return res;
}

console.log(longestSubArraykSum([2, 3, 5, 0, 0, 1, 9], 10));

function generateAllSubArraySumK(arr, k) {
  let map = new Map();
  let currentSum = 0;
  let start = 0;
  let end = -1;
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    currentSum += arr[i];
    if (currentSum === k) {
      start = 0;
      end = i + 1;
      res.push(arr.slice(start, end));
    }
    if (map.has(currentSum - k)) {
      for (let startIndex of map.get(currentSum - k)) {
        start = startIndex + 1;
        end = i + 1;
        res.push(arr.slice(start, end));
      }
    }
    if (!map.has(currentSum)) {
      map.set(currentSum, []);
    }
    map.get(currentSum).push(i);
  }
  return res;
}

console.log(generateAllSubArraySumK([2, 3, 5, 0, 0, 1, 9], 10));
console.log(generateAllSubArraySumK([1, 2, 1, 2, 1], 3));
console.log(generateAllSubArraySumK([1, 2, 3, -2, 5], 6));

function generateAllSubArraySumK1(arr, k) {
  let map = new Map();
  let currentSum = 0;
  let start = 0;
  let end = -1;
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    currentSum += arr[i];
    if (currentSum === k) {
      start = 0;
      end = i + 1;
      res.push(arr.slice(start, end));
    }
    if (map.has(currentSum - k)) {
      for (let startIndex of map.get(currentSum - k)) {
        start = startIndex + 1;
        end = i + 1;
        res.push(arr.slice(start, end));
      }
    }
    if (!map.has(currentSum - k)) {
      map.set(currentSum, []);
    }
    map.get(currentSum).push(i);
    // console.log("map---->", map);
  }
  return res;
}

// console.log(generateAllSubArraySumK1([2, 3, 5, 0, 0, 1, 9], 10));
// console.log(generateAllSubArraySumK1([1, 2, 1, 2, 1], 3));
// console.log(generateAllSubArraySumK1([1, 2, 3, -2, 5], 6));
console.log(generateAllSubArraySumK1([9, -3, 3, -1, 6, -5], 0));
console.log(generateAllSubArraySumK1([6, -2, 2, -8, 1, 7, 4, -10], 0));

function twoSum(arr, target) {
  let map = new Map();
  // let start = -1;
  // let end = -1;
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    let getValue = target - arr[i];
    if (map.has(getValue)) {
      for (let index of map.get(getValue)) {
        res.push([index, i]);
      }
    }
    if (!map.has(arr[i])) {
      map.set(arr[i], []);
    }
    map.get(arr[i]).push(i);
  }
  return res;
}

console.log(twoSum([2, 6, 5, 8, 11], 14));
console.log(twoSum([1, 3, 2, 4], 5));
