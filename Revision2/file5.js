function ques1(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
console.log(ques1([2, 1, 3, 4, 2, 1]));

function ques2(arr) {
  for (let i = 0; i < arr.length; ++i) {
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
console.log(ques2([2, 1, 3, 4, 2, 1]));

function ques3(arr) {
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
console.log(ques3([2, 1, 3, 4, 2, 1]));

function ques4(arr) {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i; j >= 0; --j) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return arr;
}
console.log(ques4([2, 1, 3, 4, 2, 1]));

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = arr.length / 2;
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
console.log(mergeSort([2, 1, 3, 4, 2, 1]));

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let left = [];
  let right = [];
  let pivot = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([2, 1, 3, 4, 2, 1]));

function recursiveBubbleSort(arr, n) {
  if (n === 0) {
    return arr;
  }
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  return recursiveBubbleSort(arr, n - 1);
}
console.log(recursiveBubbleSort([2, 1, 3, 4, 2, 1], 5));

function recursiveInsertionSort(arr, n) {
  if (n === arr.length) {
    return arr;
  }
  for (let i = n; i < arr.length; ++i) {
    if (arr[i - 1] > arr[i]) {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
    }
  }
  return recursiveInsertionSort(arr, n + 1);
}
console.log(recursiveInsertionSort([2, 1, 3, 4, 2, 1], 1));
