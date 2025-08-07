function pattern(n) {
  let str = "";
  let size = n * 2 - 1;
  for (let i = 0; i < size; ++i) {
    for (let j = 0; j < size; ++j) {
      let min = Math.min(i, j, size - 1 - i, size - 1 - j);
      let value = n - min;
      str += value;
    }
    str += "\n";
  }
  return str;
}

console.log(pattern(4));

// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4



function pattern1(n){
    let str = "";
    let index = 1;
    for(let i = 0;i<n;++i){
        for(let j = 0;j<i+1;++j){
            str += index + " ";
            index = index+2;
        }
        str += "\n";
    }
    return str;
}
console.log(pattern1(3))
// 1  
// 3 5  
// 7 9 11 



function pattern3(n){
    let str = "";
    let index = (n*2)-1;
    for(let i = 0;i<n;++i){
        for(let j = 0;j<i+1;++j){
            str += index + " ";
            index-- ;
        }
        str += "\n"
    }
    return str;
}

console.log(pattern3(3))
// 5  
// 4 3  
// 2 1 0 