function printN(n){
    if(n === 1) {
        return "1";
    }
    return printN(n-1)+n;
}

console.log(printN(5));

//learn what is recursion
//types of recursion
//recursion stack