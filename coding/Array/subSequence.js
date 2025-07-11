function subSequence(arr){
    let result= [[]];
    for(const num of arr){
        console.log("nums;;;;;;;:::>>>>",num);
        const subSeq = [];
        for(const ele of result){
            console.log("ele::::::<<<<<", ele);
            subSeq.push([...ele,num]);
            console.log("subsequenceArray......::::::<<<>>>>>>", subSeq);
        }
        result.push(...subSeq);
        console.log("result/////////////", result);
    }
    return result;
}

console.log(subSequence([1,2,3]));