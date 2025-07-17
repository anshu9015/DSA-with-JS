function increasingSubArray(arr) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i; j < arr.length; ++j) {
            res.push(arr.slice(i, j + 1));
        }
    }
    let result = [];
    for (let i = 0; i < res.length; ++i) {
        let resultValue = isSorted(res[i]);
        if (resultValue) {
            result.push(res[i]);
        }
    }
    let longest = result[0];
    for (let i = 1; i < result.length; ++i) {
        if (result[i].length > longest.length) {
            longest = result[i];
        }
    }
    return longest;
}


function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] >= arr[j]) {
                return false;
            }
        }
    }
    return true;
}
const Input = [1, 2, 2, 4, 5, 6, 1, 2, 3, 4, 0]



console.log(increasingSubArray(Input))