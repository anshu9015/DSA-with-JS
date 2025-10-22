function largestElement(arr) {
  let max = -Infinity;
  for (let ele of arr) {
    max = Math.max(max, ele);
  }
  return max;
}
console.log(largestElement([2, 1, 3, 4, 1]));

function secondLargestElement(arr) {
  let largest = arr[0];
  let secondLargestElement = -Infinity;
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] > largest) {
      secondLargestElement = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargestElement && arr[i] !== largest) {
      secondLargestElement = arr[i];
    }
  }
  return secondLargestElement;
}
console.log(secondLargestElement([2, 1, 3, 4, 1]));

function checkSorted(arr) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(checkSorted([2, 1, 3, 4, 1]));

function removeDuplicate(arr) {
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(removeDuplicate([2, 1, 3, 4, 1]));

function rotateArrayByOne(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    let j = i + 1;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
console.log(rotateArrayByOne([2, 1, 3, 4, 1]));

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}
console.log(reverse([2, 1, 3, 4, 1], 0, 4));

function rotateArrayD(arr, d) {
  if (d > arr.length) {
    d = d % arr.length;
  }
  reverse(arr, 0, d - 1);
  reverse(arr, d, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
  return arr;
}
console.log(rotateArrayD([2, 1, 3, 4, 1], 2));

function moveZeros(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== 0) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }
  return arr;
}
console.log(moveZeros([2, 0, 1, 0, 5, 0]));

function linearSearch(arr, ele) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === ele) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([2, 1, 4, 2, 1], 4));

function unionArray(arr1, arr2) {
  let newSet1 = new Set(arr1);
  for (let val of arr2) {
    if (!newSet1.has(val)) {
      newSet1.add(val);
    }
  }
  return [...newSet1];
}
console.log(unionArray([1, 2, 3], [2, 3, 4]));

function intersectionArray(arr1, arr2) {
  let newSet = new Set(arr1);
  let result = [];
  for (let val of arr2) {
    if (newSet.has(val)) {
      result.push(val);
    }
  }
  return result;
}
console.log(intersectionArray([1, 2, 3], [2, 3, 4]));

function missingNumber(arr) {
  let sum = 0;
  let n = arr.length;
  let totalSum = (n * (n + 1)) / 2;
  for (let ele of arr) {
    sum += ele;
  }
  return totalSum - sum;
}
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

// Example 1:

// Input: prices = {1, 1, 0, 1, 1, 1}

// Output: 3

// Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

// Input: prices = {1, 0, 1, 1, 0, 1}

// Output: 2

// Explanation: There are two consecutive 1's in the array.

function maximumConsecutiveOnes(arr) {
  let count = 0;
  let max = -Infinity;
  for (let ele of arr) {
    if (ele === 1) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 0;
    }
  }
  return max;
}
console.log(maximumConsecutiveOnes([1, 0, 1, 1, 0, 1]));

function appearOnce(arr) {
  let xorr = 0;
  for (let ele of arr) {
    xorr = xorr ^ ele;
  }
  return xorr;
}
console.log(appearOnce([4, 1, 2, 1, 2]));

// Example 1:
// Input Format: N = 3, k = 5, array[] = {2,3,5}
// Result: 2
// Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

// Example 2:
// Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
// Result: 3
// Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.

function longSubArrayK(arr, k) {}
