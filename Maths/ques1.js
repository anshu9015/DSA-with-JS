// Example 1:
// Input:N = 12345

// Output:5

// Explanation:  The number 12345 has 5 digits.

// Example 2:
// Input:N = 7789

// Output: 4

// Explanation: The number 7789 has 4 digits.

function countDigits(n) {
  let str = String(n);
  return str.length;
}

console.log(countDigits(12345));

function countDigit(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(countDigit(1));

function reverseNumber(n) {
  let reversedValue = 0;
  while (n > 0) {
    reversedValue = reversedValue * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return reversedValue;
}
console.log(reverseNumber(12345));


function checkPallindrom(n) {
  let reversedValue = reverseNumber(n);
  if (n === reversedValue) {
    return true;
  }
  return false;
}

console.log(checkPallindrom(121));


function findGCD(a,b){
    while(b !== 0){
        let r = a%b;
        a = b;
        b = r;
    }
    return a;
}

console.log(findGCD(28,20))

function gcd1(a,b){
    if(b===0) return a;
    return gcd1(b,a%b);
}
console.log(gcd1(28,20))


function gcd3(a,b){
    let gcd = 1;
    for(let i = 1;i<=Math.min(a,b);++i){
        if(a%i===0 && b%i===0){
            gcd = i;
        }
    }
    return gcd;
}
console.log(gcd3(28,20));


function ArmstrongNumber(n){
    let count = 0;
    let value = n;
    let temp = n;
    let sum = 0;
    while(n>0){
        n= Math.floor(n/10);
        count++;
    }
    while(value>0){
        let digit = value%10;
        sum += Math.pow(digit,count);
        value = Math.floor(value/10);
    }
    if(sum === temp){
        return true;
    }
    return false;
}

console.log(ArmstrongNumber(153))


function printAllDivisor(n){
    let result = [];
    for(let i = 1;i<=n;++i){
        if(n%i===0){
            result.push(i);
        }
    }
    return result;
}

console.log(printAllDivisor(36))


function printAllDivisor1(n){
    let sqrt = Math.sqrt(n);
    let res = [];
    for(let i = 1;i<=sqrt;++i){
        if(n%i===0){
            res.push(i);
            if(i !== n/i){
                res.push(n/i);
            }
        }
    }
    return res;
}
console.log(printAllDivisor1(36))



function checkPrime(n){
    let count = 0;
    for(let i = 1;i<=n;++i){
        if(n%i===0){
            count++;
        }
    }
    if(count===2){
        return true;
    }
    return false;
}
console.log(checkPrime(23))

function checkPrime(n){
    if(n<=1) return false;
    for(let i = 2;i<=Math.sqrt(n);++i){
        if(n%i===0){
            return false
        }
    }
    return true;
}
console.log(checkPrime(44));