function majorityElement(arr) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        let count = 0;
        for (let j = i; j < arr.length; ++j) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > arr.length / 2) {
            res.push(arr[i]);
        }
    }
    return res;
}

const arr1 = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5] //output 2
const arr2 = [1, 2, 1, 1, 2, 1, 2, 2];



console.log(majorityElement(arr2));


arr = [3, 5, 1, 7, 9]
target = 10

