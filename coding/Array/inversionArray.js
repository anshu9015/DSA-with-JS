function inversionArray(arr){
    let count = 0;
    let res = [];
    for(let i = 0;i<arr.length-1;++i){
        for(let j = i+1;j<arr.length;++j){
            if(arr[i]>arr[j]){
                count++;
                res.push([arr[i],arr[j]]);
            }
        }
    }
    return {count,res};
}
const arr1 = [2, 4, 1, 3, 5]
// { count: 3, res: [ [ 2, 1 ], [ 4, 1 ], [ 4, 3 ] ] }

console.log(inversionArray(arr1));