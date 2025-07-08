function setArray(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; ++i) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }
  return Object.keys(obj);
}

function commonElement(arr1, arr2) {
  let arr3 = [];
  let removedArray1 = setArray(arr1);
  let removedArray2 = setArray(arr2);
  for (let i = 0; i < removedArray1.length; ++i) {
    for (let j = 0; j < removedArray2.length; ++j) {
      if (removedArray1[i] === removedArray2[j]) {
        arr3.push(removedArray2[j]);
      }
    }
  }

  return arr3;
}

console.log(commonElement([1, 2, 3, 2], [3, 5, 6, 8, 2])); //output : [2,3] the common element in both the array
