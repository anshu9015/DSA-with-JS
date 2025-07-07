function sortingArray(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
      }
    }
  }
  return arr;
}
console.log(sortingArray([1, 2, 6, 4, 3, 8])); //output: [1,2,3,4,6,8]
