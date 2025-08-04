// Find the maximum and minimum in an array      done
function minMax(arr) {
  if (!arr.length) return { max: null, min: null };
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
}

// Find the missing number from 1 to N           done
function missingNumber(arr, N) {
  const setArray = new Set(arr);
  let result = [];
  for (let i = 1; i <= N; ++i) {
    if (!setArray.has(i)) {
      result.push(i);
    }
  }
  return result;
}

// Remove duplicates from a sorted array         done
function removeDuplicate(arr) {
  const setArray = new Set(arr);
  return [...setArray];
}

// Move all zeroes to the end                    done
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

// Reverse an array                              done
function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

// Find the second largest element               done
function secondLargestElement(arr) {
  if (arr.length < 2) return null;
  let largest = arr[0];
  let secondLargest = -Infinity;
  for (let i = 1; i < arr.length; ++i) {
    if (largest < arr[i]) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest === -Infinity ? null : secondLargest;
}

// Check if an array is sorted                   done
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// Left rotate the array by one                  done
function rotateByOne(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    let j = i + 1;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Rotate array by K positions                   done
function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
function rotateByK(arr, k) {
  if (k > arr.length) {
    k = k % arr.length;
  }
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
  return arr;
}

// Find the frequency of elements                done
function frequencyElement(arr) {
  let obj = {};
  for (let val of arr) {
    obj[val] = (obj[val] || 0) + 1;
  }
  return obj;
}

// Count occurrences of a number                 done
function countOccurences(arr, ele) {
  let count = 0;
  for (let val of arr) {
    if (val === ele) {
      count++;
    }
  }
  return count;
}

// Sum of array elements                         done
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Find common elements in two arrays                          done
function commonElement(arr1, arr2) {
  const setArray = new Set(arr1);
  let result = new Set();
  for (let i = 0; i < arr2.length; ++i) {
    if (setArray.has(arr2[i])) {
      result.add(arr2[i]);
    }
  }
  return result;
}

// Check if two arrays are equal                               done
function equalArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let obj = {};
  for (let i = 0; i < arr1.length; ++i) {
    obj[arr1[i]] = (obj[arr1[i]] || 0) + 1;
  }
  for (let i = 0; i < arr2.length; ++i) {
    if (!obj[arr2[i]]) {
      return false;
    }
    obj[arr2[i]]--;
  }
  return true;
}

// Check if a subarray with sum 0 exists                       done
function subArraySumZero(arr) {
  let prefixSum = new Set();
  let currSum = 0;
  prefixSum.add(0);
  for (let val of arr) {
    currSum += val;
    if (prefixSum.has(currSum)) {
      return true;
    }
    prefixSum.add(currSum);
  }
  return false;
}

// Maximum sum of a subarray of size K (sliding window)        done
function subArraySizeK(arr, k) {
  let windowSum = 0;
  for (let i = 0; i < k; ++i) {
    windowSum += arr[i];
  }
  let max = windowSum;
  for (let i = k; i < arr.length; ++i) {
    windowSum = windowSum + arr[i] - arr[i - k];
    max = Math.max(windowSum, max);
  }
  return max;
}

// Find the majority element (>n/2)                            done
function majorityElement(arr) {
  let element;
  let count = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (count === 0) {
      element = arr[i];
      count = 1;
    } else if (arr[i] === element) {
      count++;
    } else {
      count--;
    }
  }
  count = 0;
  for (let val of arr) {
    if (val === element) {
      count++;
    }
  }
  return count > Math.floor(arr.length / 2) ? element : null;
}

// Find all elements that appear more than ⌊n/3⌋ times.         done
function majorityEle(arr) {
  let candidate1, candidate2;
  let count1 = 0;
  let count2 = 0;
  for (let val of arr) {
    if (count1 === 0) {
      candidate1 = val;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = val;
      count2 = 1;
    } else if (candidate1 === val) {
      count1++;
    } else if (candidate2 === val) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }
  count1 = 0;
  count2 = 0;
  let result = [];
  for (let i = 0; i < arr.length; ++i) {
    if (candidate1 === arr[i]) {
      count1++;
    } else if (candidate2 === arr[i]) {
      count2++;
    }
  }
  if (count1 > Math.floor(arr.length / 3)) {
    result.push(candidate1);
  }
  if (count2 > Math.floor(arr.length / 3)) {
    result.push(candidate2);
  }

  return result;
}

const arr = [1, 2, 3, 4, 5],
  k = 2;
// [2,1,5,4,3]
// [3,4,5,1,2]
//SHIFT REMOVE THE 1ST ELEMENT FROM THE ARRAY
//UNSHIFT ADDS THE ELEMENT IN THE 1ST IN THE ARRAY
function rotu(arr, k) {
  for (let i = 0; i < k; ++i) {
    arr.push(arr.shift());
  }
  return arr;
}

function rotu1(arr, k) {
  for (let i = 0; i < k; ++i) {
    arr.unshift(arr.pop());
  }
  return arr;
}


// Find all elements that appear more than ⌊n/k⌋ times (generalized version).     done
function majorElementK(arr,k){
    let obj = {};
    for(let i = 0;i<arr.length;++i){
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }
    let result = [];
    for(let key in obj){
        if(obj[key]>Math.floor(arr.length/k)){
            result.push(Number(key));
        }
    }
    return result;
}


// Check for pair with a given sum                             done
function targetSum(arr,target){
    const targetPair = new Set();
    let result = []
    for(let val of arr){
        const getValue = target-val;
        if(targetPair.has(getValue)){
            result.push([getValue,val]);
        }
        targetPair.add(val);
    }
    return result
}

// Merge two sorted arrays                                     done
function mergeTwoSortedArray(arr1,arr2){
    const arr3 = arr1.concat(arr2);
    arr3.sort((a,b) => a-b);
    return arr3;
}


// Find the unique element (appears once, rest twice)          done
function uniqueElement(arr){
    let obj = {}
    let result = [];
    for(let val of arr){
        obj[val] = (obj[val] || 0) +1;
    }
    for(let key in obj){
        if(obj[key] === 1){
            result.push(Number(key))
        }
    }
    return result;
}

function countSubArraySumK(arr,k){
    const prefixSum = new Map();
    prefixSum.set(0,1)
    let prefix = 0;
    let count = 0;
    for(let val of arr){
        prefix += val;
        if(prefixSum.get(prefix-k)){
            count = count + prefixSum.get(prefix-k) ;
        }
        prefixSum.set(prefix,(prefixSum.get(prefix)||0)+1);
    }
    return count;
}
