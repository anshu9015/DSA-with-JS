function subArrayWithGreaterThanSum(arr, target) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i; j < arr.length; ++j) {
            res.push(arr.slice(i, j + 1));
        }
    }
    let result = [];
    for (let i = 0; i < res.length; ++i) {
        let sum = 0;
        for (let j = 0; j < res[i].length; ++j) {
            sum += res[i][j];
        }
        if (sum >= target) {
            result.push(res[i]);
        }
    }
    let Smallest = result[0];
    for (let i = 0; i < result.length; ++i) {
        if (result[i].length < Smallest.length) {
            Smallest = result[i];
        }
    }
    return Smallest;
}

console.log(subArrayWithGreaterThanSum([1, 2, 3], 4));

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] > arr[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(isSorted([1, 2, 3, 2]))