function insertionSort(arr) {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i; j > 0; --j) {
      if (arr[j - 1] < arr[j]) break;
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    }
  }
  return arr;
}
console.log(insertionSort([2, 1, 3, 4, 65, 6, 8, 2, 3]));
