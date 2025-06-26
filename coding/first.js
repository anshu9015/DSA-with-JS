// Reverse a string.

// Check if a string is a palindrome.

// Find the factorial of a number.

// Find the largest number in an array.

// Find the second largest number in an array.

// Remove duplicates from an array.

// Check if two strings are anagrams.

// FizzBuzz (print numbers 1 to 100 with rules).

// Count the number of vowels in a string.

// Flatten a nested array.

// Merge two sorted arrays.

// Find the frequency of each element in an array.

// Check if a number is prime.

// Find the missing number in an array of 1 to n.

// Sum of all elements in an array.



// Reverse a string.
const string1 = "ACA";

function reverseString(str) {
    let reverseStringValue = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStringValue += str[i];
    }
    return reverseStringValue.trim();
}

// console.log(reverseString(string1));


// Check if a string is a palindrome.
function checkPallindrome(str) {
    const value = reverseString(str);
    if (value === str) {
        return true;
    }
    return false;
}

// console.log(checkPallindrome(string1));



// Find the factorial of a number.
const number = 5;

function factorial(num) {
    let factorialValue = 1;
    for (let i = num; i > 1; i--) {
        factorialValue *= i;
    }
    return factorialValue;
}

// console.log(factorial(number));


// Find the largest number in an array.
const array1 = [1, 2, 4, 6, 3, 8, 5, 6];

function largestElement(arr) {
    let max = -1;
    for (let i = 0; i < arr.length; ++i) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
// console.log(largestElement(array1));


// Find the second largest number in an array.
function secondLargestElement(arr) {
    let largest = largestElement(array1);
    let secondLargest = -1;
    for (let i = 0; i < arr.length; ++i) {
        if (secondLargest < arr[i] && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
// console.log(secondLargestElement(array1));



// Remove duplicates from an array.
function removeDuplicate(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; ++i) {
        let isDuplicate = false;
        for (let j = 0; j < arr2.length; ++j) {
            if (arr[i] === arr2[j]) {
                // arr2.push(arr[i]);
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
// console.log(removeDuplicate(array1));

// alternate method
function removeDuplicate2(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; ++i) {
        if (!arr2.includes(arr[i])) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
// console.log(removeDuplicate2(array1));

// Check if two strings are anagrams.
function checkAnagram(str1, str2) {
    let obj1 = {};
    let obj2 = {};
    if (str1.length !== str2.length) {
        return false;
    }
    for (let char of str1) {
        obj1[char] = (obj1[char] || 0) + 1;
    }
    for (let char of str2) {
        obj2[char] = (obj2[char] || 0) + 1;
    }
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
// console.log(checkAnagram("silent", "listen"));


// FizzBuzz (print numbers 1 to 100 with rules).
function printFizzBuzz() {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("FIZZBUZZ");
        }
        else if (i % 3 === 0) {
            arr.push("FIZZ");
        }
        else if (i % 5 === 0) {
            arr.push("BUZZ");
        }
        else {
            arr.push(i);
        }
    }
    return arr;
}
// console.log(printFizzBuzz());


// Count the number of vowels in a string.
function checkVowelsNumber(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; ++i) {
        if (vowels.includes(str[i])) {
            count += 1;
        }
    }
    return count;
}
// console.log(checkVowelsNumber("asdfghxcvgbhsdfgheee"));


// Flatten a nested array.
function flatArray(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; ++i) {
        if (Array.isArray(arr[i])) {
            let flatArray1 = flatArray(arr[i]);
            arr1.push(...flatArray1);
        }
        else {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
// console.log(flatArray([1, 2, [1, 2, 3, [4, 5]]]));


// Find the frequency of each element in an array.
function checkFrequency(arr) {
    let obj = {};
    for (let element of arr) {
        obj[element] = (obj[element] || 0) + 1;
    }
    return obj;
}
// console.log(checkFrequency(array1));



// Find the missing number in an array of 1 to n.
function onemissingNumber(arr, num) {
    let sum = 0;
    const totalSum = (num * (num + 1)) / 2;
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i];
    }
    return totalSum - sum;
}
// console.log(onemissingNumber([1, 2, 3, 5, 6], 6));

function multiplemissingNumber(arr, num) {
    let missings = [];
    for (let i = 1; i <= num; ++i) {
        let found = false;
        for (let j = 0; j < arr.length; ++j) {
            if (arr[j] === i) {
                found = true;
                break;
            }
        }
        if (!found) {
            missings.push(i);
        }
    }
    return missings;
}
console.log(multiplemissingNumber([2,1,4],5));
function swap(arr, i, j) {
    // arr[i] = arr[i] - arr[j];
    // arr[j] = arr[i] + arr[j];
    // arr[i] = arr[j] - arr[i];
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


// Merge two sorted arrays.
function sortingArray(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] > arr[j]) {
                swap(arr, i, j);
            }
        }
    }
    return arr;
}
// console.log(sortingArray([1,5,4,3,2]));

function mergeTwoSortedArray(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    const concatedSortedArray = sortingArray(arr3);
    return concatedSortedArray;
}
// console.log(mergeTwoSortedArray([1, 4, 5], [3, 7, 4]));

function checkPrime(n) {
    if (n < 1) { return false; }
    for (let i = 2; i <= Math.sqrt(n); ++i) {
        if (n % i === 0) {
            return false;
        }
        return true;
    }
}
// console.log(checkPrime(52));

// function howManyPrime(num){
//     let arr1= [];
//     for(let i = 1;i<num/2;++i){
//         if(num%i !== 0){
//             arr1.push(i);
//         }
//     }
//     return arr1;
// }
// console.log(howManyPrime(16));

// function moveZeroToEnd(arr){
//     let arr1 = [];
//     for(let i = 0;i<arr.length;++i){
//         if(arr[i] === 0){
//             arr1.push(arr[i]);
//         }
//         else{
//             arr1.unshift(arr[i]);
//         }
//     }
//     return arr1;
// }
// console.log(moveZeroToEnd([3,5,0,0,4]));

// function moveZeroToEnd(arr){
//     let arr1 = [];
//     let zeroCount = 0;
//     for(let i = 0;i<arr.length;++i){
//         if(arr[i] === 0){
//             zeroCount++;
//         }
//         else{
//             arr1.push(arr[i]);
//         }
//     }
//     while(zeroCount--){
//         arr1.push(0);
//     }
//     return arr1;
// }
// console.log(moveZeroToEnd([3,5,0,0,4,6]));

function moveZeroToEnd(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
    return arr;
}
// console.log(moveZeroToEnd([3, 5, 0, 0, 4, 6]));

function findIndex(arr,target){
    let index = 0;
    for(let i = 0;i<arr.length;++i){
        if(arr[i] !== target){
            index++;            
        }
        else{return index;}
    }
    // return index;
}
// console.log(findIndex([1,4,5,6,5,6,7,8,89,6,9,4],1));

// function reverseArray(arr){
//     let end = arr.length-1;
//     for(let i = 0;i<arr.length/2;++i){
//         let temp = arr[i];
//         arr[i] = arr[end];
//         arr[end] = temp;
//         end--;
//     }
//     return arr;
// }
// console.log(reverseArray([1,2,3,4,5,6,5,8,9,2]));

function reverseArray(arr,i,j){
    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}
// console.log(reverseArray([1,2,3],0,1));

// function rotateArray(arr,d){
//     for(let i = 0;i<d;++i){
//      arr.push(arr.shift());
//     }
//     return arr;
// }
// console.log(rotateArray([1,2,3,4,5],2));

function rotateArray(arr,d){
    if(d>arr.length){
        d = d%arr.length;
    }
    reverseArray(arr,0,d-1);
    reverseArray(arr,d,arr.length-1);
    reverseArray(arr,0,arr.length-1);
    return arr;
}
// console.log(rotateArray([1,2,3,4,5,5,6,7,8,8,9,9,9,8,9,90,6,8,7654,4,3,7,3,],6));


//  Easy (1–20)
// Find the maximum and minimum in an array

// Find the missing number from 1 to N

// Remove duplicates from a sorted array

// Move all zeroes to the end

// Reverse an array

// Find the second largest element

// Check if an array is sorted

// Left rotate the array by one

// Rotate array by K positions

// Find the frequency of elements

// Count occurrences of a number

// Sum of array elements

// Find the unique element (appears once, rest twice)

// Find common elements in two arrays

// Check if two arrays are equal

// Check if a subarray with sum 0 exists

// Maximum sum of a subarray of size K (sliding window)

// Find the majority element (>n/2)

// Check for pair with a given sum

// Merge two sorted arrays

// 🔁 Medium (21–40)
// Kadane's Algorithm (max subarray sum)

// Sort an array of 0s, 1s, and 2s (Dutch National Flag)

// Find leaders in an array

// Longest consecutive subsequence

// Equilibrium index of an array

// Trapping Rain Water

// Product of array except self

// Find duplicates in an array

// Longest subarray with sum K

// Find all subarrays with a given sum

// Minimum number of swaps to sort an array

// Smallest subarray with sum ≥ target

// Longest increasing subarray

// Next greater element

// Check if array can be partitioned into two equal sum subsets

// Rearrange array in max-min form

// Find all pairs with a given difference

// Count inversions in array

// Maximum product subarray

// Number of subarrays with XOR = K


// Find the maximum and minimum in an array
function minMax(arr){
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;
    for(let i = 0;i<arr.length;++i){
        if(arr[i]>max){
            max = arr[i];
        }
        else if(arr[i]<min){
            min = arr[i];
        }
    }
    return {max,min};
}
console.log(minMax([2,3,1,4,6,3,8]));


// Find the missing number from 1 to N
function missing(arr,n){
    let totalSum = (n*(n+1))/2;
    let sum = 0;
    for(let i = 0;i<arr.length;++i){
        sum += arr[i];
    }
    return (totalSum-sum);
}
console.log(missing([1,2,4],4))

function multipleMissing(arr,n){
  let missingArray = [];
   for(let i = 1;i<=n;++i){
    let found = false;
    for(let j = 0;j<arr.length;++j){
        if(arr[j] === i){
            found = true;
            break;
        }
    }
    if(!found){
        missingArray.push(i);
    }
}

    return missingArray;
}
console.log(multipleMissing([1,2,4,7],8))