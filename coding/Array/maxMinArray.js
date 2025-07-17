function maxMinArray(arr) {
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; ++i) {
        if (max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return { max, min };
}


console.log(maxMinArray([1, 2, 3, 4, 54, 5, 4, 2]));