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
