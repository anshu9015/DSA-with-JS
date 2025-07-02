function subArray(arr){
    let res = [];
    for(let i = 0;i<arr.length;++i){
        for(let j = i;j<arr.length;++j){
            res.push(arr.slice(i,j+1));
        }
    }
    return res.filter((item) => item.length === 2);
}

console.log(subArray([1,2,3]))