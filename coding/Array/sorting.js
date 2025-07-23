function sortingArray(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] > arr[j]) {
        [arr[i],arr[j]] = [arr[j],arr[i]];
      }
    }
  }
  return arr;
}

const arr = [2, 0, 1, 2, 1, 0];
console.log(sortingArray(arr));
console.log(sortingArray([1, 2, 6, 4, 3, 8])); //output: [1,2,3,4,6,8]



//bubble sort time complexity is always 0(n^2) in worst case . if the array is sorted the time complexity will go to 0(n).
