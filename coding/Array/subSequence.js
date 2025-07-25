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


// [
//   [],       [ 1 ],
//   [ 2 ],    [ 1, 2 ],
//   [ 3 ],    [ 1, 3 ],
//   [ 2, 3 ], [ 1, 2, 3 ]
// ]

function subsequence1(arr){
    const result = [[]];
    for(const num of arr){
        const subsequenceq = [];
        for(const ele of result){
            subsequenceq.push([...ele,num]);
        }
        result.push(...subsequenceq);
    }
    return result;
}

console.log(subsequence1([1, 2, 3]));
