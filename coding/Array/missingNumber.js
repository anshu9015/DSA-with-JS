function missingNumber(arr, n) {
  let missingArray = [];
  for (let i = 1; i <= n; ++i) {
    let found = false;
    for (let j = 0; j < arr.length; ++j) {
      if (arr[j] === i) {
        found = true;
        break;
      }
    }
    if (!found) {
      missingArray.push(i);
    }
  }
  return missingArray;
}

console.log(missingNumber([2, 1, 4], 8));//output: [3,5,6,7,8]

//first of all we take the n , which shows that till that number which is already given n should be in the array from 1.
//then we will iterate from 1 to n and also iterate the array which matches with iteration of 1 to n which does not found should be in the another array
//the approach is we have to take the boolean value which initially taken as false...and when we iterate with array and which found then we change the boolean value to true
// and in the loop from 1 to n which is false should be in the another array this is the resulted array
