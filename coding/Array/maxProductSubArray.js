function maxProductSubArray(arr) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i; j < arr.length; ++j) {
            res.push(arr.slice(i, j + 1));
        }
    }
    let maxProduct = 1;
    let maxIndex = -1;
    for (let i = 0; i < res.length; ++i) {
        let product = 1;
        for (let j = 0; j < res[i].length; ++j) {
            product *= res[i][j];
        }
        if (product > maxProduct) {
            maxProduct = product;
            maxIndex = i;
        }
    }
    return res[maxIndex];
}

const arr1 = [1, 2, 3]; //output : [[1],[1,2],[1,2,3],[2],[2,3],[3]];

console.log(maxProductSubArray(arr1));


function maxProductSubArray1(arr) {
    let res = [];
    let result = [];
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i; j < arr.length; ++j) {
            res.push(arr.slice(i, j + 1));
        }
    }
    let maxProduct = 1;
    for (let i = 0; i < res.length; ++i) {
        let product = 1;
        for (let j = 0; j < res[i].length; ++j) {
            product *= res[i][j];
        }
        if (product > maxProduct) {
            maxProduct = product;
        }
    }
    for (let i = 0; i < res.length; ++i) {
        let product = 1;
        for (let j = 0; j < res[i].length; ++j) {
            product *= res[i][j];
        }
        if (product === maxProduct) {
            result.push(res[i]);
        }
    }
    return result;
}

const arr2 = [1, 2, 3]; //output : [[1],[1,2],[1,2,3],[2],[2,3],[3]];

console.log(maxProductSubArray1(arr2));