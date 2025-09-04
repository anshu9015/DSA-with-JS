function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        swapped = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}
console.log(bubbleSort([1, 3, 2, 5, 3, 6, 4]));

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }
  return arr;
}
console.log(selectionSort([1, 3, 2, 5, 3, 6, 4]));

function insertionSorting(arr) {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i - 1; j > 0; --j) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(insertionSorting([1, 3, 2, 5, 3, 6, 4]));

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
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
console.log(mergeSort([1, 3, 2, 5, 3, 6, 4]));

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; ++i) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([1, 3, 2, 5, 3, 6, 4]));

function recursiveBubbleSort(arr, n) {
  if (n <= 1) return arr;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  return recursiveBubbleSort(arr, n - 1);
}
console.log(recursiveBubbleSort([1, 3, 2, 5, 3, 6, 4], 7));

function recursiveInsertion(arr, n) {
  if (n === arr.length) {
    return arr;
  }
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i - 1] > arr[i]) {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
    }
  }
  return recursiveInsertion(arr, n + 1);
}
console.log(recursiveInsertion([1, 3, 2, 5, 3, 6, 4], 1));
