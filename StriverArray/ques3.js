function maxProduct(arr) {
  let maxi = 0;
  for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      let product = 1;
      for (let k = i; k <= j; ++k) {
        product *= arr[k];
      }
      maxi = Math.max(maxi, product);
    }
  }
  return maxi;
}
console.log(maxProduct([1, 2, 3, 4, 5, 0]));
console.log(maxProduct([1, 2, -3, 0, -4, -5]));

function maxProduct1(arr) {
  let maxi = 0;
  for (let i = 0; i < arr.length - 1; ++i) {
    let product = 1;
    for (let j = i + 1; j < arr.length; ++j) {
      product *= arr[j];
      maxi = Math.max(maxi, product);
    }
  }
  return maxi;
}
console.log(maxProduct1([1, 2, 3, 4, 5, 0]));
console.log(maxProduct1([1, 2, -3, 0, -4, -5]));

function subSequence(arr) {
  let res = [[]];
  for (let num of arr) {
    let subSequence = [];
    for (let ele of res) {
      subSequence.push([...ele, num]);
    }
    res.push(...subSequence);
  }
  return res;
}

// console.log(subSequence([1, 2, 3]));

function maxiProduct(arr) {
  let pre = 1;
  let suff = 1;
  let ans = -Infinity;
  for (let i = 0; i < arr.length; ++i) {
    if (pre === 0) pre = 1;
    if (suff === 0) suff = 1;
    pre = pre * arr[i];
    suff = suff * arr[arr.length - i - 1];
    ans = Math.max(ans, Math.max(pre, suff));
  }
  return ans;
}
console.log(maxiProduct([1, 2, -3, 0, -4, -5]));

function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}

function longestConsecutive(arr) {
  let longest = 1;
  for (let i = 0; i < arr.length; ++i) {
    let x = arr[i];
    let cnt = 1;
    while (linearSearch(arr, x + 1) === true) {
      x = x + 1;
      cnt++;
    }
    longest = Math.max(longest, cnt);
  }
  return longest;
}

console.log(longestConsecutive([3, 8, 5, 7, 6]));

function longConsecutive(arr) {
  let cnt = 1;
  let longest = 1;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i + 1] - arr[i] === 1) {
      cnt++;
      longest = cnt;
    }
    longest = Math.max(longest, cnt);
  }
  return longest;
}

console.log(longConsecutive([3, 8, 5, 7, 6]));
console.log(longConsecutive([100, 200, 1, 3, 2, 4]));

function longingConsecutive(arr) {
  let newSet = new Set();
  let longest = 1;
  for (let i = 0; i < arr.length; ++i) {
    newSet.add(arr[i]);
  }
  for (let it of newSet) {
    if (!newSet.has(it - 1)) {
      let x = it;
      let cnt = 1;
      while (newSet.has(x + 1)) {
        x = x + 1;
        cnt++;
      }
      longest = Math.max(longest, cnt);
    }
  }
  return longest;
}

console.log(longingConsecutive([100, 200, 1, 3, 2, 4]));

function nCr(n, r) {
  let res = 1;
  for (let i = 0; i < r; ++i) {
    res = res * (n - i);
    res = res / (i + 1);
  }
  return res;
}

function pascalTriangle(r, c) {
  const element = nCr(r - 1, c - 1);
  return element;
}

console.log(pascalTriangle(5, 3));

// function ncr(n, r) {
//   let ans = 1;
//   for (let i = 0; i < r; ++i) {
//     ans = ans * (n - i);
//     ans = ans / (i + 1);
//   }
//   return ans;
// }

function printTriangle(n) {
  let str = "";
  let ans = 1;
  for (let i = 0; i < n; ++i) {
    str += ans + " ";
    ans = ans * (n - i - 1);
    ans = ans / (i + 1);
  }
  return str;
}

console.log(printTriangle(6));

function generateRow(r) {
  let str = "";
  let ans = 1;
  for (let i = 1; i <= r; ++i) {
    str += ans + " ";
    ans *= r - i;
    ans = ans / i;
  }
  return str;
}
console.log(generateRow(6));

function generateAllRow(r) {
  let res = [];
  for (let row = 1; row <= r; ++row) {
    let ans = 1;
    let tempArr = [];
    for (let i = 1; i <= row; ++i) {
      tempArr.push(ans);
      ans *= row - i;
      ans = ans / i;
    }
    res.push(tempArr);
  }
  return res;
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

console.log(merge([1, 4, 8, 10], [3, 5, 8]));

function merge1(left, right) {
  let i = left.length - 1;
  let j = 0;
  while (i >= 0 && j < right.length) {
    if (left[i] > right[j]) {
      [left[i], right[j]] = [right[j], left[i]];
      i--;
      j++;
    } else {
      break;
    }
  }
  // left.sort((a, b) => a - b);
  // right.sort((a, b) => a - b);
  // return [...left, ...right];
  return { left, right };
}
console.log(merge1([1, 4, 8, 10], [2, 3, 9]));

function merging(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;
  let gap = Math.ceil((n + m) / 2);
  while (gap > 0) {
    let left = 0;
    let right = gap;
    while (right < n + m) {
      if (left < n && right >= n) {
        if (arr1[left] > arr2[right - n]) {
          [arr1[left], arr2[right - n]] = [arr2[right - n], arr1[left]];
        }
      } else if (left < n && right < n) {
        if (arr1[left] > arr1[right]) {
          [arr1[left], arr1[right]] = [arr1[right], arr1[left]];
        }
      } else {
        if (arr2[left - n] > arr2[right - n]) {
          [arr2[left - n], arr2[right - n]] = [arr2[right - n], arr2[left - n]];
        }
      }
      right++;
      left++;
    }
    gap = gap === 1 ? 0 : Math.ceil(gap / 2);
  }
  return [...arr1, ...arr2];
}
console.log(merging([1, 4, 8, 10], [2, 3, 9]));

function mergeTwoSortedArraying(arr3, arr4) {
  let a = arr3.length;
  let b = arr4.length;
  let gap = Math.ceil((a + b) / 2);
  while (gap > 0) {
    let pre = 0;
    let post = gap;
    while (post < a + b) {
      if (pre < a && post < a) {
        if (arr3[pre] > arr3[post]) {
          [arr3[pre], arr3[post]] = [arr3[post], arr3[pre]];
        }
      } else if (pre < a && post >= a) {
        if (arr3[pre] > arr4[post - a]) {
          [arr3[pre], arr4[post - a]] = [arr4[post - a], arr3[pre]];
        }
      } else {
        if (arr4[pre - a] > arr4[post - a]) {
          [arr4[pre - a], arr4[post - a]] = [arr4[pre - a], arr4[post - a]];
        }
      }
      pre++;
      post++;
    }
    gap = gap === 1 ? 0 : Math.ceil(gap / 2);
  }
  return [...arr3, ...arr4];
}

console.log(mergeTwoSortedArraying([1, 3, 5, 7], [0, 2, 6, 8, 9]));

function triplet(arr) {
  let res = new Set();
  for (let i = 0; i < arr.length - 2; ++i) {
    for (let j = i + 1; j < arr.length - 1; ++j) {
      for (let k = j + 1; k < arr.length; ++k) {
        let sum = arr[i] + arr[j] + arr[k];
        if (sum === 0) {
          let temp = [arr[i], arr[j], arr[k]];
          temp.sort((a, b) => a - b);
          res.add(temp.join(","));
        }
      }
    }
  }
  return [...res].map((s) => s.split(",").map(Number));
}
console.log(triplet([-1, 0, 1, 2, -1, -4]));

function threeSum(arr) {
  let newSet = new Set();
  for (let i = 0; i < arr.length; ++i) {
    let hashSet = new Set();
    for (let j = i + 1; j < arr.length; ++j) {
      let third = -(arr[i] + arr[j]);
      if (hashSet.has(third)) {
        let temp = [arr[i], arr[j], third];
        temp.sort((a, b) => a - b);
        newSet.add(temp.join(","));
      }
      hashSet.add(arr[j]);
    }
  }
  return [...newSet].map((s) => s.split(",").map(Number));
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

function threeSuming(arr) {
  arr.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = arr.length - 1;
    while (j < k) {
      if (arr[i] + arr[j] + arr[k] < 0) {
        j++;
      } else if (arr[i] + arr[j] + arr[k] > 0) {
        k--;
      } else {
        let temp = [arr[i], arr[j], arr[k]];
        res.push(temp);
        j++;
        k--;
        while (j < k && arr[j] === arr[j - 1]) {
          j++;
        }
        while (j < k && arr[k] === arr[k + 1]) {
          k--;
        }
      }
    }
  }
  return res;
}

console.log(threeSuming([-1, 0, 1, 2, -1, -4]));

function removeDuplicate(arr) {
  arr.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    else {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(removeDuplicate([1, 3, 2, 1, 5, 3]));
