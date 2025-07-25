function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (target === arr[mid]) return mid;
    if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([2, 3, 4, 10, 40], 10));

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
console.log(bubbleSort([1, 3, 2, 4]));

function insertionSort(arr) {
  for (let j = 0; j < arr.length; ++j) {
    for (let i = j - 1; i > 0; --i) {
      if (arr[i - 1] < arr[i]) break;
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
    }
  }
  return arr;
}
console.log(insertionSort([1, 3, 2, 4]));

function selectionsort(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
console.log(selectionsort([1, 3, 2, 4, 1]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log(mergeSort([1, 3, 2, 4, 2, 1, 7, 3]));

function quicksort(arr) {
  if (arr.length <= 1) return arr;
  const left = [];
  const right = [];
  let pivot = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; ++i) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quicksort(left), pivot, ...quicksort(right)];
}
console.log(quicksort([1, 3, 2, 4, 2, 3, 4, 41, 1, 2]));
