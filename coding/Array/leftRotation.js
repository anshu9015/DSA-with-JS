function leftRotation(arr) {
  let j = 1;
  for (let i = 0; i < arr.length - 1; ++i) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }

  return arr;
}
console.log(leftRotation([1, 2, 3, 4, 5]));
