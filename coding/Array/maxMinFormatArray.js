function maxMin(arr) {
    let res = [];
    sortingArray(arr);
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        if (i !== j) {
            res.push(arr[j]);
            res.push(arr[i]);
        } else {
            res.push(arr[i]);
        }
        i++;
        j--;
    }
    return res;
}

function sortingArray(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

const Input = [1, 2, 3, 4, 5, 6, 7]


// console.log(maxMin([1,2,5,7,3,8]))
console.log(maxMin(Input));