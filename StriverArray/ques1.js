function largestElement(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(largestElement([1, 3, 4, 5, 2, 6]));

function secondLargestElement(arr) {
  let largest = arr[0];
  let secondLargest = -Infinity;
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secondLargestElement([1, 3, 4, 5, 2, 6]));

function checkSorted(arr) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(checkSorted([1, 3, 4, 5, 2, 6]));
console.log(checkSorted([1, 2, 3]));

function removeDuplicate(arr) {
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
console.log(removeDuplicate([1, 3, 2, 4, 2]));

function removeDuplicate1(arr) {
  const newSet = new Set(arr);
  return [...newSet];
}
console.log(removeDuplicate1([1, 3, 2, 4, 2]));

function leftRotate(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    let j = i + 1;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
console.log(leftRotate([1, 2, 3]));

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotateArrayD(arr, d) {
  if (d > arr.length) {
    d = d % arr.length;
  }
  reverse(arr, 0, d - 1);
  reverse(arr, d, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
  return arr;
}

console.log(rotateArrayD([1, 2, 3, 4, 5], 2));

function moveZeros(arr) {
  let count = 0;
  let result = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== 0) {
      result.push(arr[i]);
      count++;
    }
  }
  let zeros = arr.length - count;
  while (zeros > 0) {
    result.push(0);
    zeros--;
  }
  return result;
}
console.log(moveZeros([1, 0, 2, 0, 3, 7, 0, 3, 4]));

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
console.log(moveZeros1([1, 0, 2, 0, 3, 7, 0, 3, 4]));

function linearSearch(arr, ele) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === ele) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([1, 0, 2, 0, 3, 7, 0, 3, 4], 3));

function unionArray(arr1, arr2) {
  const arr3 = arr1.concat(arr2);
  const newSet = new Set(arr3);
  return [...newSet];
}
console.log(unionArray([1, 2, 3], [2, 3, 4]));

function unionArray1(arr1, arr2) {
  const newSet = new Set(arr1);
  for (let val of arr2) {
    if (!newSet.has(val)) {
      newSet.add(val);
    }
  }
  return [...newSet];
}
console.log(unionArray1([1, 2, 3], [2, 3, 4]));

function intersectionArray(arr1, arr2) {
  const newSet = new Set(arr1);
  let result = [];
  for (let val of arr2) {
    if (newSet.has(val)) {
      result.push(val);
    }
  }
  return result;
}

console.log(intersectionArray([1, 2, 3], [2, 3, 4]));

function missingNumber(arr, N) {
  let totalSum = (N * (N + 1)) / 2;
  let sum = arr.reduce((curr, acc) => curr + acc, 0);
  return totalSum - sum;
}
console.log(missingNumber([1, 3, 4, 5], 5));

function multipleMissing(arr, n) {
  const newSet = new Set(arr);
  let result = [];
  for (let i = 1; i <= n; ++i) {
    if (!newSet.has(i)) {
      result.push(i);
    }
  }
  return result;
}
console.log(multipleMissing([1, 3, 5], 5));

//MAXIMUM CONSECUTIVE ONES
function maximumConsecutiveOnes(arr) {
  let count = 0;
  let res = [];
  for (let val of arr) {
    if (val === 1) {
      count++;
      res.push(count);
    } else {
      count = 0;
    }
  }
  let maxi = 0;
  for (let val of res) {
    maxi = Math.max(val, maxi);
  }
  return maxi;
}

console.log(maximumConsecutiveOnes([1, 1, 0, 1, 1, 1]));

function maximumConsecutiveOnes1(arr) {
  let count = 0;
  let maxi = 0;
  for (let val of arr) {
    if (val === 1) {
      count++;
      maxi = Math.max(maxi, count);
    } else {
      count = 0;
    }
  }

  return maxi;
}

console.log(maximumConsecutiveOnes1([1, 1, 0, 1, 1, 1]));

function appearOnce(arr) {
  const newMap = new Map();
  for (let val of arr) {
    newMap.set(val, (newMap.get(val) || 0) + 1);
  }
  for (let val of arr) {
    if (newMap.get(val) === 1) {
      return val;
    }
  }
  return -1;
}
console.log(appearOnce([4, 1, 2, 1, 2]));

function appearOnce1(arr) {
  let XORR = 0;
  for (let i = 0; i < arr.length; ++i) {
    XORR = XORR ^ arr[i];
  }
  return XORR;
}

console.log(appearOnce1([4, 1, 2, 1, 2]));

function NumberSubArraySumK(arr, k) {
  let prefixSum = 0;
  let res = 0;
  let newSet = new Map();
  newSet.set(0, 1);
  for (let val of arr) {
    prefixSum += val;
    if (newSet.has(prefixSum - k)) {
      res += newSet.get(prefixSum - k);
    }
    newSet.set(prefixSum, (newSet.get(prefixSum) || 0) + 1);
  }
  return res;
}
console.log(NumberSubArraySumK([2, 3, 5], 5));
console.log(NumberSubArraySumK([2, 3, 5, 1, 9], 10));

//Generate All SubArrays
function generateAllSubArrays(arr) {
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i; j < arr.length; ++j) {
      res.push(arr.slice(i, j + 1));
    }
  }
  return res;
}
console.log(generateAllSubArrays([1, 2, 3]));

function longestSubArraySumK(arr, k) {
  let length = 0;
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
console.log(longestSubArraySumK([2, 3, 5, 1, 9], 10));

function longestSubArrayK(arr, k) {
  let length = 0;
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

console.log(longestSubArrayK([2, 3, 5, 1, 9], 10));

function longestSubArraykLength(arr, k) {
  let newMap = new Map();
  let length = 0;
  let currSum = 0;
  for (let i = 0; i < arr.length; ++i) {
    currSum += arr[i];
    if (currSum === k) {
      length = Math.max(length, i + 1);
    }
    if (newMap.has(currSum - k)) {
      length = Math.max(length, i - newMap.get(currSum - k));
    }
    if (!newMap.has(currSum)) {
      //beacause i have to give the output of the longest subarray
      newMap.set(currSum, i);
    }
  }
  return length;
}
console.log(longestSubArraykLength([1, -2, 3, 2, -2], 1));

function countSubArrayK(arr, k) {
  let newMap = new Map();
  let currSum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; ++i) {
    currSum += arr[i];
    if (currSum === k) {
      count = count + 1;
    }
    if (newMap.has(currSum - k)) {
      count += newMap.get(currSum - k);
    }
    newMap.set(currSum, (newMap.get(currSum) || 0) + 1);
  }
  return count;
}
console.log(countSubArrayK([2, 3, 5, 1, 9], 10));

function printlongestSubArrayk(arr, k) {
  let newMap = new Map();
  let length = 0;
  let currSum = 0;
  let start = 0;
  let end = -1;
  for (let i = 0; i < arr.length; ++i) {
    currSum += arr[i];
    if (currSum === k && i + 1 > length) {
      length = i + 1;
      start = 0;
      end = i;
    }
    if (newMap.has(currSum - k)) {
      let prevIndex = newMap.get(currSum - k);
      if (i - prevIndex > length) {
        length = i - prevIndex;
        start = prevIndex + 1;
        end = i;
      }
    }
    if (!newMap.has(currSum)) {
      //beacause i have to give the output of the longest subarray
      newMap.set(currSum, i);
    }
  }
  return end !== -1 ? arr.slice(start, end + 1) : [];
}
console.log(printlongestSubArrayk([1, -2, 3, 2, -2], 1));

function longSubArrayK(arr, k) {
  let newMap = new Map();
  let current = 0;
  let length = 0;
  for (let i = 0; i < arr.length; ++i) {
    current += arr[i];
    if (current === k) {
      length = Math.max(length, i + 1);
    }
    if (newMap.has(current - k)) {
      length = Math.max(length, i - newMap.get(current - k));
    }
    if (!newMap.has(current)) {
      newMap.set(current, i);
    }
  }
  return length;
}
console.log(longSubArrayK([1, -2, 3, 2, -2], 1));

function countSubArray(arr, k) {
  let newMap = new Map();
  let currentSum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; ++i) {
    currentSum += arr[i];
    if (currentSum === k) {
      count += 1;
    }
    if (newMap.has(currentSum - k)) {
      count += newMap.get(currentSum - k);
    }
    newMap.set(currentSum, (newMap.get(currentSum) || 0) + 1);
  }
  return count;
}
console.log(countSubArray([2, 3, 5, 1, 9], 10));

function generateLongestSubArray(arr, k) {
  let newMap = new Map();
  let current = 0;
  let length = 0;
  let start = 0;
  let end = -1;
  for (let i = 0; i < arr.length; ++i) {
    current += arr[i];
    if (current === k && i + 1 > length) {
      length = i + 1;
      start = 0;
      end = i;
    }
    if (newMap.has(current - k)) {
      let previousIndex = newMap.get(current - k);
      if (i - previousIndex > length) {
        length = i - previousIndex;
        start = previousIndex + 1;
        end = i;
      }
    }
    if (!newMap.has(current)) {
      newMap.set(current, i);
    }
  }
  return end !== -1 ? arr.slice(start, end + 1) : [];
}
console.log(generateLongestSubArray([2, 3, 5, 1, 9], 10));

function generateAllSubArrayK(arr, k) {
  let currentSum = 0;
  let newMap = new Map();
  let start = 0;
  let end = -1;
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    currentSum += arr[i];
    if (currentSum === k) {
      start = 0;
      end = i;
      res.push(arr.slice(start, end + 1));
    }
    if (newMap.has(currentSum - k)) {
      start = newMap.get(currentSum - k) + 1;
      end = i;
      res.push(arr.slice(start, end + 1));
    }
    newMap.set(currentSum, i);
  }
  return res;
}
console.log(generateAllSubArrayK([2, 3, 5, 1, 9], 10))