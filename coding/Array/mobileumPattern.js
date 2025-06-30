function mobileumPattern(n) {
    let result = "";
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < i + 1; ++j) {
            result += j + 1 + " ";
        }
        result = result + "\n";
    }
    return result;
}
console.log(mobileumPattern(5));

// 1
// 2 6
// 3 7 10
// 4 8 11 13
// 5 9 12 14 15 if n=5
function pattern(n) {
    let result = "";
    let index = 0;
    for (let i = 0; i < n; i++) {
        index++;
        for (let j = 0; j < i + 1; j++) {
            result += index + " ";
            // result += i+1;
            // console.log(`${i+1} `);
            // process.stdout.write(`${i+1} `);
        }
        result = result + "\n";
    }
    return result;
}

console.log(pattern(5));

function pattern2(n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        let index = i;
        let increment = n - 1;
        for (let j = 0; j < i + 1; j++) {
            result += index + 1 + " ";
            index = index + increment;
            increment--;
        }
        result = result + "\n";
    }
    return result;
}

console.log(pattern2(3));