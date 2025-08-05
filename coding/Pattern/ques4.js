function pattern1(n){
    let str = "";
    let index = 1;
    for(let i = 0;i<n;++i){
        for(let j = 0;j<i+1;++j){
            str += index+" ";
            index++;
        }
        str += "\n";
    }    
    return str;
}
console.log(pattern1(5));
// 1
// 2  3
// 4  5   6
// 7  8   9 10
// 11 12 13 14 15

function pattern2(n){
    let str = "";
    for(let i = 0;i<n;++i){
        for(let j = 0;j<i+1;++j){
            str += String.fromCharCode(64+j+1);
        }
        str += "\n";
    }
    return str;
}
console.log(pattern2(5))


function pattern3(n){
    let str = "";
    for(let i = 0;i<n;++i){
        for(let j = 0;j<n-i;++j){
            str += String.fromCharCode(64+j+1);
        }
        str += "\n";
    }
    return str;
}
console.log(pattern3(5))


function pattern4(n){
    let str = "";
    for(let i = 0;i<n;++i){
        for(let j = 0;j<i+1;++j){
            str += String.fromCharCode(64+i+1);
        }
        str += "\n";
    }
    return str;
}
console.log(pattern4(5));

