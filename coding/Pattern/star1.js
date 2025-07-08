function star1(n){
    let res = "";
    for(let i = 0;i<n;++i){
        for(let j = 0;j<i+1;++j){
            res +="*";
        }
        res = res + "\n";
    }
    return res;
}
console.log(star1(5));

function star2(n){
    let res = "";
    for(let i = n;i>0;--i){
        for(let j = 0;j<i;++j){
            res +="*";
        }
        res = res + "\n";
    }
    return res;
}
console.log(star2(5));

function star3(n){
    let res = "";
    for(let i = 0;i<n;++i){
        for(let space = 0;space<n-i-1;++space){
            res += " ";
        }
        for(let j = 0;j<(i*2)+1;++j){
            res +="*";
        }
        res = res + "\n";
    }
    return res;
}
console.log(star3(5));

function star4(n){
     let res = "";
     for(let i = n;i>0;--i){
       for(let j = 0;j<i;++j){
           res +="*";
       }
       res = res + "\n";
   }
    for(let i = 0;i<n;++i){
        for(let j = 0;j<i+1;++j){
            res +="*";
        }
        res = res + "\n";
    }
    return res;    
}

console.log(star4(5));




// *****
// ****
// ***
// **
// *
// **
// ***
// ****
// *****

//     *
//    ***
//   *****
//  *******
// *********