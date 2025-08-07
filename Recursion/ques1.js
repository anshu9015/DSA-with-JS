function printN(n) {
  if (n === 1) {
    return "1";
  }
  return printN(n - 1) + " " + n;
}

console.log(printN(5));

function printNameN(n) {
  let str = "anshu";
  if (n === 1) {
    return str;
  }
  return printNameN(n - 1) + "\n" + str;
}
console.log(printNameN(5));


function oneToN(n){
    if(n === 1){
        return "1";
    }
    return oneToN(n-1) + "\n" + n;
}

console.log(oneToN(5))


function nToOne(n){
    if(n===1){
        return n;
    }
    return n+"\n"+nToOne(n-1);
}

console.log(nToOne(5))

function sumNnumber(n){
    let sum = 0;
    if(n===1){
        sum += 1;
        return sum;
    }
    return sumNnumber(n-1)+n;
}
console.log(sumNnumber(5))
//learn what is recursion
//types of recursion
//recursion stack
