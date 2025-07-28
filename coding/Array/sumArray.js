function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); //output: 15


function sum(arr){
  return arr.reduce((acc,curr) => acc + curr, 0);
}

console.log(sum([1, 2, 3, 4, 5]))
