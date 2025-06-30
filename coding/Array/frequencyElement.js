function frequencyElement(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; ++i) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }
    return obj;
}
console.log(frequencyElement([1, 2, 3, 4, 2, 1, 5]));