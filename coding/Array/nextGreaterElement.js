function nextGreaterElement(arr) {
    let res = [];
    for (let i = 0; i < arr.length - 1; ++i) {
        let largest = arr[i];
        for (let j = i + 1; j < arr.length; ++j) {
            largest = Math.max(largest, arr[j]);
            if(largest>arr[i]){
                break;
            }
        }
        if (largest === arr[i]) {
            res.push(-1);
        }
        else {
            res.push(largest);
        }
    }
    res.push(-1);
    return res;
}


const arr = [13, 7, 6, 12]
const arr1 = [4, 5, 2, 25]

const arr3 = [10, 9, 8, 7]
const arr4 = [1, 2, 3, 4]
const arr5 = [1, 3, 2, 3]
const arr6 = [6, 8, 0, 1, 3]

const arr7 = [10]









console.log(nextGreaterElement(arr7))