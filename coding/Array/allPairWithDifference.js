function pairWithDifference(arr, k) {
  let res = [];
  for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] - arr[j] === k || arr[i] - arr[j] === -k) {
        res.push([arr[i], arr[j]]);
      }
    }
  }
  return res;
}

const arr1 = [1, 2, 3, 4, 5];
let k = 1;
console.log(pairWithDifference(arr1, k)); //output: [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 4, 5 ] ]
//   1         1         1         1
