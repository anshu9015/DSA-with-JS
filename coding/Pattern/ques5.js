function pattern1(n){
    let str = "";
    for(let i = 0;i<n;++i){
        let index = 65+n-i-1;
        for(let j = 0;j<i+1;++j){
            str += String.fromCharCode(index+j) + " ";
        }
        str += "\n";
    }
    return str;
}
console.log(pattern1(5));

// E
// D E
// C D E
// B C D E 
// A B C D E