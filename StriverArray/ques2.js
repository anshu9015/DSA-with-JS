function checkTargetSum(arr, target) {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}
console.log(checkTargetSum([2, 6, 5, 8, 11], 14));

function checkTargetSum1(arr, target) {
  let newSet = new Set();
  for (let i = 0; i < arr.length; ++i) {
    let getValue = target - arr[i];
    if (newSet.has(getValue)) {
      return true;
    }
    newSet.add(arr[i]);
  }
  return false;
}

console.log(checkTargetSum1([2, 6, 5, 8, 11], 14));

function indexTargetSum(arr, target) {
  let newMap = new Map();
  let start = -1;
  let end = -1;
  for (let i = 0; i < arr.length; ++i) {
    let getValue = target - arr[i];
    if (newMap.has(getValue)) {
      start = newMap.get(getValue);
      end = i;
    }
    newMap.set(arr[i], i);
  }
  return { start, end };
}

console.log(indexTargetSum([2, 6, 5, 8, 11], 14));

function sort012(arr) {
  let count_0 = 0;
  let count_1 = 0;
  let count_2 = 0;
  for (let val of arr) {
    if (val === 0) {
      count_0 += 1;
    } else if (val === 1) {
      count_1 += 1;
    } else {
      count_2 += 1;
    }
  }
  let index = 0;
  while (count_0) {
    arr[index++] = 0;
    count_0--;
  }
  while (count_1) {
    arr[index++] = 1;
    count_1--;
  }
  while (count_2) {
    arr[index++] = 2;
    count_2--;
  }
  return arr;
}
console.log(sort012([2, 0, 2, 1, 1, 0]));

function sort102(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}

console.log(sort102([2, 0, 2, 1, 1, 0]));

function majorityElement(arr) {
  let newMap = new Map();
  for (let i = 0; i < arr.length; ++i) {
    newMap.set(arr[i], (newMap.get(arr[i]) || 0) + 1);
    if (newMap.get(arr[i]) > arr.length / 2) {
      return arr[i];
    }
  }
  return -1;
}

console.log(majorityElement([4, 4, 2, 4, 3, 4, 4, 3, 2, 4]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

function majorityElement1(arr) {
  let count = 0;
  let element;
  for (let i = 0; i < arr.length; ++i) {
    if (count === 0) {
      count = 1;
      element = arr[i];
    } else if (arr[i] === element) {
      count++;
    } else {
      count--;
    }
  }
  let count1 = 0;
  for (let val of arr) {
    if (val === element) {
      count1++;
    }
  }
  if (count1 > Math.floor(arr.length / 2)) {
    return element;
  }
  return -1;
}
console.log(majorityElement1([4, 4, 2, 4, 3, 4, 4, 3, 2, 4]));

function kadaneAlgorithm(arr) {
  let sum = 0;
  let maxi = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
    maxi = Math.max(maxi, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxi;
}

console.log(kadaneAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

console.log(kadaneAlgorithm([1]));
