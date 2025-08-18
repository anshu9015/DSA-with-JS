function maxProduct(arr) {
  let maxi = 0;
  for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      let product = 1;
      for (let k = i; k <= j; ++k) {
        product *= arr[k];
      }
      maxi = Math.max(maxi, product);
    }
  }
  return maxi;
}
console.log(maxProduct([1, 2, 3, 4, 5, 0]));
console.log(maxProduct([1, 2, -3, 0, -4, -5]));

function maxProduct1(arr) {
  let maxi = 0;
  for (let i = 0; i < arr.length - 1; ++i) {
    let product = 1;
    for (let j = i + 1; j < arr.length; ++j) {
      product *= arr[j];
      maxi = Math.max(maxi, product);
    }
  }
  return maxi;
}
console.log(maxProduct1([1, 2, 3, 4, 5, 0]));
console.log(maxProduct1([1, 2, -3, 0, -4, -5]));


// [ 1, 2, 3, 4, 5 ]
// [ 1, 2, 3, 4, 5 ]
// [ 1, 2, 100, 4, 5 ]
// [ 1, 2, 3, 4, 5 ]
// [ 1, 2, 3, 4, [ 1, 2, 3 ] ]
// [ 1, 2, 3, 4, [ 1, 2, 3 ] ]
// [ 1, 2, 200, 4, [ 1, 2, 3 ] ]
// [ 1, 2, 3, 4, [ 1, 2, 3 ] ]
// [ 1, 2, 200, 4, [ 1, 300, 3 ] ]
// [ 1, 2, 3, 4, [ 1, 300, 3 ] ]
// [ 1, 2, 3, 4, [ 1, 400, 3 ] ]
// [ 1, 2, 3, 4, [ 1, 300, 3 ] ]
