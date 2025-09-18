function findSingleElement(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; ++i) {
    xor = xor ^ arr[i];
  }
  return xor;
}
console.log(findSingleElement([1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]));

function goodNumber(n) {
  let product = 1;
  const MOD = 1000000007;
  for (let i = 0; i < n; ++i) {
    if (i % 2 !== 0) {
      product = (product * 4) % MOD;
    }
    if (i % 2 === 0) {
      product = (product * 5) % MOD;
    }
  }
  return product;
}
console.log(goodNumber(50));
