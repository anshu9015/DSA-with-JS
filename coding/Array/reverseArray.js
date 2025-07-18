function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  for (let i = 0; i < arr.length / 2; ++i) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5])); //output: [5,4,3,2,1]
