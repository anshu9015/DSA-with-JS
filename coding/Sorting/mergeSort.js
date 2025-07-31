function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let start = 0;
  let end = arr.length;
  let mid = Math.floor((start + end) / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
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

console.log(mergeSort([2, 1, 3, 4, 65, 6, 8, 2, 3]));

// Type	Complexity
// Time	O(n log n)
// Space	O(n)
function mer(arr) {
  if (arr.length <= 1) return arr;
  let start = 0;
  let end = arr.length;
  let mid = Math.floor((start + end) / 2);
  const left = mer(arr.slice(0, mid));
  const right = mer(arr.slice(mid));
  return merge1(left, right);
}

function merge1(left, right) {
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
  return result.concat(left.slice(i)).concat(right.slice(j));
}
