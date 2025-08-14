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

function twoPointer2Sum(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    let sum = arr[low] + arr[high];
    if (sum > target) {
      high--;
    } else if (sum < target) {
      low++;
    } else {
      return { low, high };
    }
  }
  return null;
}
console.log(twoPointer2Sum([2, 5, 6, 8, 11], 14));

function maxSubArraySum(arr) {
  let max = -1;
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i; j < arr.length; ++j) {
      let sum = 0;
      for (let k = i; k <= j; ++k) {
        sum += arr[k];
      }
      max = Math.max(max, sum);
    }
  }
  return max;
}
console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function maxSubArraySum1(arr) {
  let max = -1;
  for (let i = 0; i < arr.length; ++i) {
    let sum = 0;
    for (let j = i; j < arr.length; ++j) {
      sum += arr[j];
      max = Math.max(max, sum);
    }
  }
  return max;
}
console.log(maxSubArraySum1([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function maximumSubArraySum(arr) {
  let maxi = -1;
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
    maxi = Math.max(maxi, sum);
    if (sum < 0) sum = 0;
  }
  return maxi;
}

console.log(maximumSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function maximumSubArraySumIndex(arr) {
  let maxi = -1;
  let sum = 0;
  let start = 0;
  let end = -1;
  let tempStart = 0;
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
    if (maxi < sum) {
      maxi = sum;
      end = i;
      start = tempStart;
    }
    if (sum < 0) {
      sum = 0;
      tempStart = i + 1;
    }
  }
  res.push(arr.slice(start, end + 1));
  return { maxi, start, end, res };
}

console.log(maximumSubArraySumIndex([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maximumSubArraySumIndex([1]));

function maxProfit(arr) {
  let maxProfit = -Infinity;
  for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      let profit = arr[j] - arr[i];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

function maximumProfit(arr) {
  let maxProfit = 0;
  let min = Infinity;
  for (let val of arr) {
    min = Math.min(min, val);
    maxProfit = Math.max(maxProfit, val - min);
  }
  return maxProfit;
}
console.log(maximumProfit([7, 1, 5, 3, 6, 4]));

function maximumProfitIndex(arr) {
  let maxProfit = 0;
  let min = Infinity;
  let start = -1;
  let end = -1;
  for (let i = 0; i < arr.length; ++i) {
    if (min > arr[i]) {
      min = arr[i];
      start = i;
    }
    if (maxProfit < arr[i] - min) {
      maxProfit = arr[i] - min;
      end = i;
    }
  }
  return { maxProfit, start, end };
}
console.log(maximumProfitIndex([7, 1, 5, 3, 6, 4]));

function positiveNegativeArray(arr) {
  let pos = [];
  let neg = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] >= 0) {
      pos.push(arr[i]);
    } else if (arr[i] < 0) {
      neg.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length / 2; ++i) {
    arr[i * 2] = pos[i];
    arr[i * 2 + 1] = neg[i];
  }
  return arr;
}

console.log(positiveNegativeArray([1, 2, -4, -5]));

function posNegArray(arr) {
  let posIndex = 0;
  let negIndex = 1;
  let ans = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > 0) {
      ans[posIndex] = arr[i];
      posIndex = posIndex + 2;
    } else if (arr[i] < 0) {
      ans[negIndex] = arr[i];
      negIndex = negIndex + 2;
    }
  }
  return ans;
}
console.log(posNegArray([1, 2, -4, -5, 7, 6]));

function posNegativeArray(arr) {
  let pos = [];
  let neg = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > 0) {
      pos.push(arr[i]);
    } else if (arr[i] < 0) {
      neg.push(arr[i]);
    }
  }
  if (pos.length < neg.length) {
    for (let i = 0; i < pos.length; ++i) {
      arr[2 * i] = pos[i];
      arr[2 * i + 1] = neg[i];
    }
    let index = pos.length * 2;
    for (let i = pos.length; i < neg.length; ++i) {
      arr[index++] = neg[i];
    }
  } else if (neg.length < pos.length) {
    for (let i = 0; i < neg.length; ++i) {
      arr[2 * i] = pos[i];
      arr[2 * i + 1] = neg[i];
    }
    let index = neg.length * 2;
    for (let i = neg.length; i < pos.length; ++i) {
      arr[index++] = pos[i];
    }
  }
  return arr;
}

console.log(posNegativeArray([1, 2, -4, -5, 7, 6]));

function findLeader(arr) {
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    let leader = true;
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] > arr[i]) {
        leader = false;
        break;
      }
    }
    if (leader) {
      res.push(arr[i]);
    }
  }
  return res;
}
// console.log(findLeader([4, 7, 1, 0]));

function findLeader2(arr) {
  let max = arr[arr.length - 1];
  let leaders = [];
  leaders.push(arr[arr.length - 1]);
  for (let i = arr.length - 2; i > 0; --i) {
    if (arr[i] > max) {
      max = arr[i];
      leaders.push(arr[i]);
    }
  }
  return leaders;
}

console.log(findLeader2([4, 7, 1, 0]));

function countingSubArrayK(arr, k) {
  let newMap = new Map();
  let count = 0;
  let currentSum = 0;
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

console.log(countingSubArrayK([3, 1, 2, 4], 6));

function majorityElementN3(arr) {
  let count1 = 0;
  let count2 = 0;
  let element1;
  let element2;
  for (let i = 0; i < arr.length; ++i) {
    if (count1 === 0) {
      count1 = 1;
      element1 = arr[i];
    } else if (count2 === 0) {
      count2 = 1;
      element2 = arr[i];
    } else if (element1 === arr[i]) {
      count1++;
    } else if (element2 === arr[i]) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }
  let cnt1 = 0;
  let cnt2 = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === element1) {
      cnt1++;
    } else if (arr[i] === element2) {
      cnt2++;
    }
  }
  if (cnt1 > Math.floor(arr.length / 3) || cnt2 > Math.floor(arr.length / 3)) {
    return { element1, element2 };
  }
  return null;
}

console.log(majorityElementN3([11, 33, 33, 11, 33, 11]));
console.log(majorityElementN3([1, 2, 2, 3, 2]));

function longestSubbArrayZero(arr) {
  let newMap = new Map();
  let currentSum = 0;
  let start = 0;
  let end = -1;
  for (let i = 0; i < arr.length; ++i) {
    currentSum += arr[i];
    if (currentSum === 0) {
      start = 0;
      end = i + 1;
    }
    if (newMap.has(currentSum)) {
      start = newMap.get(currentSum);
      end = i;
    }
    if (!newMap.has(currentSum)) {
      newMap.set(currentSum, i);
    }
  }
  return end - start;
}
console.log(longestSubbArrayZero([9, -3, 3, -1, 6, -5]));
console.log(longestSubbArrayZero([6, -2, 2, -8, 1, 7, 4, -10]));

function maximumPositiveProductSubArray(arr) {
  let product = 1;
  let maxi = 0;
  for (let i = 0; i < arr.length; ++i) {
    product = product * arr[i];
    maxi = Math.max(product, maxi);
    if (product < 0) {
      product = 1;
    }
  }
  return maxi;
}
console.log(maximumPositiveProductSubArray([1, 2, 3, 4, 5, 0]));

function triplet(arr) {
  let res = [];
  for (let i = 0; i < arr.length - 2; ++i) {
    for (let j = i + 1; j < arr.length - 1; ++j) {
      let sum = 0;
      for (let k = j + 1; k < arr.length; ++k) {
        sum += arr[i] + arr[j] + arr[k];
        if (sum === 0) {
          res.push(arr[i], arr[j], arr[k]);
        }
      }
    }
  }
  return res;
}
console.log(triplet([-1, 0, 1, 2, -1, -4]));
