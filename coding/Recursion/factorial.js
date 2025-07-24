function factorial(n){
    if(n === 0) return 1;
    return n * factorial(n-1);
}
console.log(factorial(5));

// Time Complexity: O(n) — Because it makes n recursive calls.

// Space Complexity: O(n) — Due to the call stack created by recursion.