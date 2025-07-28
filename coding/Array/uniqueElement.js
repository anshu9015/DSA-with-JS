function uniqueElement(arr) {
  let obj = {};
  const arr1 = [];
  for (let i = 0; i < arr.length; ++i) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }
  for (let i = 0; i < arr.length; ++i) {
    if (obj[arr[i]] === 1) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}

console.log(uniqueElement([1, 2, 3, 2, 2, 4, 4, 5]));//output:[1,2,3,4,5]


function unique(arr){
  let obj = {}
  for(let ele of arr){
    obj[ele] = (obj[ele] || 0) + 1;
  }
  return arr.filter((num) => obj[num] === 1)
}


console.log(unique([1, 2, 3, 2, 2, 4, 4, 5]))
