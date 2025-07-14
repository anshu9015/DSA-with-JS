function subSequence(arr) {
    let result = [[]];
    for (const num of arr) {
        console.log("num", num);
        const subSeq = [];
        for (const ele of result) {
            subSeq.push([...ele, num]);
        }
        result.push(...subSeq);
    }
    return result;
}

console.log(subSequence([1, 2, 3]));

// [
//   [],       [ 1 ],
//   [ 2 ],    [ 1, 2 ],
//   [ 3 ],    [ 1, 3 ],
//   [ 2, 3 ], [ 1, 2, 3 ]
// ]