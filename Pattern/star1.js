function star1(n) {
    let res = "";
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < i + 1; ++j) {
            res += "*";
        }
        res = res + "\n";
    }
    return res;
}
console.log(star1(5));

function star2(n) {
    let res = "";
    for (let i = n; i > 0; --i) {
        for (let j = 0; j < i; ++j) {
            res += "*";
        }
        res = res + "\n";
    }
    return res;
}
console.log(star2(5));

function star3(n) {
    let res = "";
    for (let i = 0; i < n; ++i) {
        for (let space = 0; space < n - i - 1; ++space) {
            res += " ";
        }
        for (let j = 0; j < (i * 2) + 1; ++j) {
            res += "*";
        }
        res = res + "\n";
    }
    return res;
}
console.log(star3(5));

function star4(n) {
    let res = "";
    for (let i = n; i > 0; --i) {
        for (let j = 0; j < i; ++j) {
            res += "*";
        }
        res = res + "\n";
    }
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < i + 1; ++j) {
            res += "*";
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



//     1
//    12
//   123
//  1234
// 12345

function patternNumber(n) {
    let str = "";
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < n - 1; ++j) {
            str += "";
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i + 1; ++j) {
            str += j + 1
        }
        str = str + "\n";
    }
    return str;
}


console.log(patternNumber(5))



function patternNumber2(n) {
    let str = "";
    for (let i = 0; i < n; ++i) {
        for (let space = 0; space < n - i - 1; ++space) {
            str += " ";
        }
        for (let j = 0; j < i + 1; ++j) {
            str += j + 1;
        }
        str += "\n";
    }
    return str;
}

console.log(patternNumber2(5));


function squarePattern(n) {
    let str = "";
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            if (i == 0 || j == 0 || i == (n - 1) || j == (n - 1)) {
                str += "*";
            } else {
                str += " ";
            }
        }
        str = str + "\n"
    }
    return str
}

console.log(squarePattern(5));