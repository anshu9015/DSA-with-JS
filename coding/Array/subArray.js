function subArray(arr) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i; j < arr.length; ++j) {
            res.push(arr.slice(i, j + 1));
        }
    }
    // return res;
    
    for (let i = 0; i < res.length; i++) {
        let sum = 0;
        for (let j = 0; j < res[i].length; j++) {
            sum = sum + res[i][j];

        }
        if (sum == 0) {
            return res[i];
        }
    }
    return -1;
}

console.log(subArray([ 1, 2, -3,2,-2]))

// [1,2,3]
// [[1],[1,2],[1,2,3],[2],[2,3],[3]]