function countOccurences(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === k) {
      count++;
    }
  }
  return count;
}

console.log(countOccurences([1, 2, 3, 4, 6, 4, 2, 8], 2)); //output: 2
