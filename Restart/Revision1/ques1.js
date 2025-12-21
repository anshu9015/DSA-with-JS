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