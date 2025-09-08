function maximumPositiveProductSubArray(arr) {
  let product = 1;
  let maxi = -Infinity;
  for (let val of arr) {
    product *= val;
    maxi = Math.max(product, maxi);
    if (product < 0) {
      product = 1;
    }
  }
  return maxi;
}
console.log(maximumPositiveProductSubArray([1, 2, 3, 4, 5, 0]));

function maxProduct(arr) {
  let maxi = -Infinity;
  let pre = 1;
  let suff = 1;
  for (let i = 0; i < arr.length; ++i) {
    if (pre === 0) pre = 1;
    if (suff === 0) suff = 1;
    pre = pre * arr[i];
    suff = suff * arr[arr.length - i - 1];
    maxi = Math.max(maxi, Math.max(pre, suff));
  }
  return maxi;
}
console.log(maxProduct([1, 2, -3, 0, -4, -5]));

function majorityElement(arr) {
  let count1 = 0;
  let count2 = 0;
  let element1;
  let element2;
  for (let val of arr) {
    if (val === element1) {
      count1++;
    } else if (val === element2) {
      count2++;
    } else if (count1 === 0) {
      count1 = 1;
      element1 = val;
    } else if (count2 === 0) {
      count2 = 1;
      element2 = val;
    } else {
      count1--;
      count2--;
    }
  }
  let count_1 = 0;
  let count_2 = 0;
  let res = [];
  for (let val of arr) {
    if (val === element1) {
      count_1++;
    }
    if (val === element2) {
      count_2++;
    }
  }
  if (count_1 > Math.floor(arr.length / 3)) {
    res.push(element1);
  }
  if (count_2 > Math.floor(arr.length / 3)) {
    res.push(element2);
  }
  return res;
}
console.log(majorityElement([11, 33, 33, 11, 33, 11]));
