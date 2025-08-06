function pattern1(n){
    let str = "";
    for(let i = n;i>0;--i){
        for(let j = 0;j<i;++j){
            str += "*";
        }
        str += '\n';
    }
    return str;
}

console.log(pattern1(5))

// *****
// ****
// ***
// **
// *

function pattern2(n){
    let str = "";
    for(let i = n;i>0;--i){
        for(let j = 0;j<i;++j){
            str += j+1;
        }
        str += "\n";
    }
    return str;
}

console.log(pattern2(5))

// 12345
// 1234
// 123
// 12
// 1

function pattern3(n){
    let str = "";
    for(let i = 0;i<n;++i){
        for(let j = 0;j<n-i-1;++j){
            str += " ";
        }
        for(let k = 0;k<(i*2)+1;++k){
            str += "*";
        }
        str += "\n";
    }
    return str;
}
console.log(pattern3(5))

//     *
//    ***
//   *****
//  *******
// *********

function pattern4(n){
    let str = "";
    for(let i = n;i>0;--i){
        for(let j = n-i;j>0;--j){
            str += " ";
        }
        for(let k = 0;k<(i*2)-1;++k){
            str += "*";
        }
        str += "\n";
    }
    return str;
}

console.log(pattern4(5))

// *********
//  *******
//   *****
//    ***
//     *