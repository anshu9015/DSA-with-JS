function productArrayExceptItself(arr) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        res.push(productArray(arr.filter(item => item !== arr[i])));
    }
    return res;
}

function productArray(arr) {
    let product = 1;
    for (let ele of arr) {
        product *= ele;
    }
    return product;
}

const Input = [0, 0, 2, 4]

console.log(productArrayExceptItself(Input));


// function productArrayExceptItself1(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; ++i) {
//         let prod=1;
//         for(let j=0;j<arr.length;j++){
//             if(j==i){
//                 continue;
//             }
//             prod=prod*arr[j];

//         }
//         res.push(prod)
//     }
//     return res;
// }
