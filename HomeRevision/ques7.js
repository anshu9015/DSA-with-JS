function sort012(arr) {
  let count_0 = 0;
  let count_1 = 0;
  let count_2 = 0;
  for (let val of arr) {
    if (val === 0) {
      count_0++;
    } else if (val === 1) {
      count_1++;
    } else {
      count_2++;
    }
  }
  let index = 0;
  while (count_0 > 0) {
    arr[index++] = 0;
    count_0--;
  }
  while (count_1 > 0) {
    arr[index++] = 1;
    count_1--;
  }
  while (count_2 > 0) {
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
  let length = arr.length;
  for (let i = 0; i < arr.length; ++i) {
    let count = 0;
    for (let j = 0; j < arr.length; ++j) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > length / 2) {
      let key = arr[i];
      return key;
    }
  }
  return -1;
}
console.log(majorityElement([4, 4, 2, 4, 3, 4, 4, 3, 2, 4]));

function majorElement(arr) {
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
  if (count1 >= Math.floor(arr.length / 2)) {
    return element;
  }
  return -1;
}
console.log(majorElement([4, 4, 2, 4, 3, 4, 4, 3, 2, 4]));

function maxSumSubArray(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; ++i) {
    let sum = 0;
    for (let j = i; j < arr.length; ++j) {
      sum += arr[j];
      max = Math.max(max, sum);
    }
  }
  return max;
}

console.log(maxSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function kadaneAlgorithm(arr) {
  let maxi = -Infinity;
  let sum = 0;
  for (let val of arr) {
    sum += val;
    maxi = Math.max(maxi, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxi;
}
console.log(kadaneAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function kadane(arr) {
  let maxi = -Infinity;
  let sum = 0;
  let tempStart = 0;
  let start = -1;
  let end = -1;
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
    if (maxi < sum) {
      maxi = sum;
      end = i + 1;
      start = tempStart;
    }
    if (sum < 0) {
      sum = 0;
      tempStart = i + 1;
    }
  }
  res.push(arr.slice(start, end));
  return { start, end, res, maxi };
}
console.log(kadane([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function stock(arr) {
  let maxi = -Infinity;
  let difference = 0;
  for (let i = 0; i < arr.length; ++i) {
    let ele = arr[i];
    for (let j = i + 1; j < arr.length; ++j) {
      maxi = Math.max(maxi, arr[j]);
      difference = Math.max(difference, -(ele - maxi));
    }
  }
  return difference;
}
console.log(stock([7, 1, 5, 3, 6, 4]));

function stockBuy(arr) {
  let maxi = 0;
  let min = Infinity;
  for (let val of arr) {
    min = Math.min(min, val);
    maxi = Math.max(maxi, val - min);
  }
  return maxi;
}
console.log(stockBuy([7, 1, 5, 3, 6, 4]));

function stockBuy1(arr) {
  let maxi = 0;
  let min = Infinity;
  let start;
  let end;
  for (let i = 0; i < arr.length; ++i) {
    if (min > arr[i]) {
      min = arr[i];
      start = i;
    }
    if (maxi < arr[i] - min) {
      maxi = arr[i] - min;
      end = i;
    }
  }
  return { maxi, start, end };
}
console.log(stockBuy1([7, 1, 5, 3, 6, 4]));

function posNeg(arr) {
  let pos = [];
  let neg = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > 0) {
      pos.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length / 2; ++i) {
    arr[i * 2] = pos[i];
    arr[i * 2 + 1] = neg[i];
  }
  return arr;
}
console.log(posNeg([1, 2, -4, -5]));

function posNeg1(arr) {
  let ans = new Array(arr.length).fill(0);
  let posIndex = 0;
  let negIndex = 1;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] < 0) {
      ans[negIndex] = arr[i];
      negIndex += 2;
    } else {
      ans[posIndex] = arr[i];
      posIndex += 2;
    }
  }
  return ans;
}
console.log(posNeg1([1, 2, -4, -5]));

function posNeg1(arr) {
  let pos = [];
  let neg = [];
  for (let val of arr) {
    if (val > 0) {
      pos.push(val);
    } else {
      neg.push(val);
    }
  }
  if (pos.length < neg.length) {
    for (let i = 0; i < pos.length; ++i) {
      arr[i * 2] = pos[i];
      arr[i * 2 + 1] = neg[i];
    }
    let index = pos.length * 2;
    for (let i = pos.length; i < neg.length; ++i) {
      arr[index++] = neg[i];
    }
  } else if (pos.length > neg.length) {
    for (let i = 0; i < neg.length; ++i) {
      arr[i * 2] = pos[i];
      arr[i * 2 + 1] = neg[i];
    }
    let index = neg.length * 2;
    for (let i = neg.length; i < pos.length; ++i) {
      arr[index++] = pos[i];
    }
  }
  return arr;
}

console.log(posNeg1([1, 2, -4, -5, -7]));

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function nextPermutation(arr) {
  let index = -1;
  for (let i = arr.length - 2; i >= 0; --i) {
    if (arr[i] < arr[i + 1]) {
      index = i;
      break;
    }
  }
  if (index === -1) {
    reverse(arr, 0, arr.length - 1);
    return arr;
  }
  for (let i = arr.length - 1; i > index; --i) {
    if (arr[i] > arr[index]) {
      [arr[index], arr[i]] = [arr[i], arr[index]];
      break;
    }
  }

  reverse(arr, index + 1, arr.length - 1);
  return arr;
}
console.log(nextPermutation([2, 1, 5, 4, 3, 0, 0]));

function findLeader(arr) {
  let res = [];
  res.push(arr[arr.length - 1]);
  for (let i = arr.length - 2; i >= 0; --i) {
    let max = arr[i];
    for (let j = i + 1; j < arr.length; ++j) {
      if (max < arr[j]) {
        max = Math.max(max, arr[j]);
      }
    }
    if (max === arr[i]) {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(findLeader([4, 7, 1, 0]));

function findLeader2(arr) {
  let max = arr[arr.length - 1];
  let res = [];
  res.push(arr[arr.length - 1]);
  for (let i = arr.length - 2; i >= 0; --i) {
    if (arr[i] > max) {
      max = arr[i];
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(findLeader2([4, 7, 1, 0]));

function longestConsecutive(arr) {
  arr.sort((a, b) => a - b);
  let cnt = 1;
  let longest = 0;
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i + 1] - arr[i] === 1) {
      cnt++;
    } else {
      cnt = 1;
    }
    longest = Math.max(longest, cnt);
  }
  return longest;
}
console.log(longestConsecutive([1, 2, 4, 3, 200, 100]));

function countSubArray(arr, k) {
  let map = new Map();
  let currentSum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; ++i) {
    currentSum += arr[i];
    if (currentSum === k) {
      count++;
    }
    if (map.has(currentSum - k)) {
      count = count + map.get(currentSum - k);
    }
    map.set(currentSum, (map.get(currentSum) || 0) + 1);
  }
  return count;
}
console.log(countSubArray([3, 1, 2, 4], 6));
