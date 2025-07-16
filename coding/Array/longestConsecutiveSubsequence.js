function sortingArray(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

function longestSubsequence(arr) {
    let count = 1;
    sortingArray(arr);
    console.log(arr);
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i + 1] - arr[i] === 1) {
            count++;
        }
    }
    return count;
}

const arr1 = [5, 4, 6, 1, 3, 2];

console.log(longestSubsequence(arr1));

const num = [1, 2, 3, 4, 5, 6];
// first of all i have to sort the array and difference should be 1
// output: 4
