function ques1(n) {
    let str = "";
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            str += "*" + " ";
        }
        str += "\n";
    }
    return str;
}
console.log(ques1(5));

function ques2(n) {
    let str = "";
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < i + 1; ++j) {
            str += "*" + " ";
        }
        str += "\n";
    }
    return str
}
console.log(ques2(5))

function ques3(n) {
    let str = "";
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < i + 1; ++j) {
            str += j + 1 + " ";
        }
        str += "\n"
    }
    return str
}
console.log(ques3(5))

function ques4(n) {
    let str = "";
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < i + 1; ++j) {
            str += i + 1 + " ";
        }
        str += "\n"
    }
    return str
}
console.log(ques4(5))


