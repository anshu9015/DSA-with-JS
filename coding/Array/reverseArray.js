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


function reverseArray1(arr) {
  let start = 0;
  let end = arr.length - 1;
  while(start<end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

console.log(reverseArray1([1,2,3,4,5]))

function reverseArray2(arr){
  let start = 0;
  let end = arr.length-1;
  while(start<end){
    [arr[start],arr[end]] = [arr[end],arr[start]];
    start++;
    end--;
  }
  return arr;
}
console.log(reverseArray2([1,3,2,7,4]))