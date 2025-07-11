function equillibriumIndex(arr){
    let res = [];
    for(let i = 0;i<arr.length;++i){
        let leftSum = 0;
        let rightSum = 0;
        if(i>0){
            for(let j = 0;j<=i-1;++j){
                leftSum += arr[j];
            }
        }
        if(i<arr.length){
            for(let k = i+1;k<arr.length;++k){
                rightSum += arr[k];
            }
        }
        if(leftSum === rightSum){
            res.push(i);
        }
    }
    return res;
}
const arr1 = [-7, 1, 5, 2, -4, 3, 0];

console.log(equillibriumIndex(arr1));