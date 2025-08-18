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

function subSequence(arr) {
  let res = [[]];
  for (let num of arr) {
    let subSequence = [];
    for (let ele of res) {
      subSequence.push([...ele, num]);
    }
    res.push(...subSequence);
  }
  return res;
}

// console.log(subSequence([1, 2, 3]));

function maxiProduct(arr) {
  let pre = 1;
  let suff = 1;
  let ans = -Infinity;
  for (let i = 0; i < arr.length; ++i) {
    if (pre === 0) pre = 1;
    if (suff === 0) suff = 1;
    pre = pre * arr[i];
    suff = suff * arr[arr.length-i-1];
    ans = Math.max(ans, Math.max(pre, suff));
  }
  return ans;
}
console.log(maxiProduct([1, 2, -3, 0, -4, -5]));
