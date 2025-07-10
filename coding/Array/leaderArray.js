function leaderArray(arr) {
    let res = [];
    let leader = arr[arr.length - 1]
    res.push(leader);
    for (let i = arr.length - 2; i > 0; --i) {
        if (arr[i] > leader) {
            leader = arr[i];
            res.push(arr[i]);
        }
    }
    return res.reverse();
}

const arr1 = [16, 17, 4, 3, 5, 2]


console.log(leaderArray(arr1));