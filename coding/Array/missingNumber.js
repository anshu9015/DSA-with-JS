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

console.log(missingNumber([2, 1, 4], 8));//output: [3,5,6,7,8] time complexity == 0(n^2)

//first of all we take the n , which shows that till that number which is already given n should be in the array from 1.
//then we will iterate from 1 to n and also iterate the array which matches with iteration of 1 to n which does not found should be in the another array
//the approach is we have to take the boolean value which initially taken as false...and when we iterate with array and which found then we change the boolean value to true
// and in the loop from 1 to n which is false should be in the another array this is the resulted array


function missingNumber1(arr, n) {
  let missingArray = [];
  for (let i = 1; i <= n; ++i) {
    if(!arr.includes(i)){
      missingArray.push(i);
    } 
  }
  return missingArray;
}

const arr = [2,3,4]
console.log(missingNumber1(arr,7))
//time complexity is 0(n*m);



function missingNumber2(arr, n) {
  const set = new Set(arr);
  let missingArray = [];
  for (let i = 1; i <= n; ++i) {
    if(!set.has(i)){
      missingArray.push(i);
    } 
  }
  return missingArray;
}

console.log(missingNumber2(arr,7))


function missingNumber3(arr,n){
  let set = new Set(arr);
  let set1 = new Set();
  for(let i = 1;i<=n;++i){
    if(!set.has(i)){
      set1.add(i);
    }
  }
  return [...set1]
}

console.log(missingNumber3(arr,7))