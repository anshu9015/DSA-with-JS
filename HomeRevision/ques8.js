function maximumPositiveProductSubArray(arr) {
  let product = 1;
  let maxi = -Infinity;
  for (let val of arr) {
    product *= val;
    maxi = Math.max(product, maxi);
    if (product < 0) {
      product = 1;
    }
  }
  return maxi;
}
console.log(maximumPositiveProductSubArray([1, 2, 3, 4, 5, 0]));

function maxProduct(arr) {
  let maxi = -Infinity;
  let pre = 1;
  let suff = 1;
  for (let i = 0; i < arr.length; ++i) {
    if (pre === 0) pre = 1;
    if (suff === 0) suff = 1;
    pre = pre * arr[i];
    suff = suff * arr[arr.length - i - 1];
    maxi = Math.max(maxi, Math.max(pre, suff));
  }
  return maxi;
}
console.log(maxProduct([1, 2, -3, 0, -4, -5]));

function majorityElement(arr) {
  let count1 = 0;
  let count2 = 0;
  let element1;
  let element2;
  let res = [];
  for (let val of arr) {
    if (count1 === 0) {
      count1 = 1;
      element1 = val;
    } else if (count2 === 0) {
      count2 = 1;
      element2 = val;
    } else if (val === element1) {
      count1++;
    } else if (val === element2) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }
  let count_1 = 0;
  let count_2 = 0;
  for (let val of arr) {
    if (val === element1) {
      count_1++;
    }
    if (val === element2) {
      count_2++;
    }
  }
  let total = count_1 + count_2;
  if (total > (2 * arr.length) / 3) {
    res.push(element1, element2);
  }
  return res;
}
console.log(majorityElement([11, 33, 33, 11, 33, 11]));

function longestSubArrayZero(arr, k) {
  let length = 0;
  let currentSum = 0;
  let map = new Map();
  for (let i = 0; i < arr.length; ++i) {
    currentSum += arr[i];
    if (currentSum === k) {
      length = Math.max(length, i + 1);
    }
    if (map.has(currentSum - k)) {
      //   for (let index of map.get(currentSum - k)) {
      //     length = Math.max(length, i - index);
      //   }
      length = Math.max(length, i - map.get(currentSum - k));
    }
    if (!map.has(currentSum)) {
      map.set(currentSum, i);
    }
    // map.get(currentSum).push(i);
  }
  return length;
}
console.log(longestSubArrayZero([9, -3, 3, -1, 6, -5], 0));

function generateLongestSubArrayZero(arr, k) {
  let start = 0;
  let end = -1;
  let map = new Map();
  let length = 0;
  let currentSum = 0;
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    currentSum += arr[i];
    if (currentSum === k && i + 1 > length) {
      length = i + 1;
      start = 0;
      end = i + 1;
    }
    if (map.has(currentSum - k)) {
      let sublength = i - map.get(currentSum - k);
      if (sublength > length) {
        length = sublength;
        start = map.get(currentSum - k) + 1;
        end = i + 1;
      }
    }
    if (!map.has(currentSum)) {
      map.set(currentSum, i);
    }
  }
  if (end !== -1) {
    res.push(arr.slice(start, end));
  } else {
    [];
  }
  return res;
}
console.log(generateLongestSubArrayZero([9, -3, 3, -1, 6, -5], 0));

function generateSubArray(arr, k) {
  let start = 0;
  let end = -1;
  let currentSum = 0;
  let map = new Map();
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    currentSum += arr[i];
    if (currentSum === k) {
      start = 0;
      end = i + 1;
      res.push(arr.slice(start, end));
    }
    if (map.has(currentSum - k)) {
      for (let index of map.get(currentSum - k)) {
        start = index + 1;
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
console.log(generateSubArray([9, -3, 3, -1, 6, -5], 0));

function nCr(n, r) {
  let res = 1;
  for (let i = 0; i < r; ++i) {
    res = res * (n - i);
    res = res / (i + 1);
  }
  return res;
}
function pascalElement(n, r) {
  let element = nCr(n - 1, r - 1);
  return element;
}
console.log(pascalElement(6, 4));

function generateRow(n) {
  let ans = 1;
  let str = "";
  for (let i = 1; i <= n; ++i) {
    str += ans + " ";
    ans = ans * (n - i);
    ans = ans / i;
  }
  return str;
}

console.log(generateRow(6));

function generateAllRow(n) {
  let str = "";
  for (let i = 1; i <= n; ++i) {
    var ans = generateRow(i);
    str += ans + " ";
  }
  str += "\n";
  return str;
}
console.log(generateAllRow(6));

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  while (i < left.length) {
    result.push(left[i++]);
  }
  while (j < right.length) {
    result.push(right[j++]);
  }
  return result;
}
console.log(merge([1, 2, 3], [5, 6, 7, 8]));

function merging(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;
  let gap = Math.ceil((m + n) / 2);
  while (gap > 0) {
    let left = 0;
    let right = gap;
    while (right < n + m) {
      if (left < n && right < n) {
        if (arr1[left] > arr1[right]) {
          [arr1[left], arr1[right]] = [arr1[right], arr1[left]];
        }
      } else if (left < n && right >= n) {
        if (arr1[left] > arr2[right - n]) {
          [arr1[left], arr2[right - n]] = [arr2[right - n], arr1[left]];
        }
      } else if (left >= n && right >= n) {
        if (arr2[left - n] > arr2[right - n]) {
          [arr2[left - n], arr2[right - n]] = [arr2[right - n], arr2[left - n]];
        }
      }
      left++;
      right++;
    }
    if (gap === 1) {
      break;
    }
    gap = Math.ceil(gap / 2);
  }
  return [...arr1, ...arr2];
}
console.log(merging([1, 2, 3], [4, 6, 7, 8]));
