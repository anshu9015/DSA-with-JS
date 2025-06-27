function removeDuplicate(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; ++i) {
        let found = false;
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] === arr[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

console.log(removeDuplicate([2, 3, 4, 2, 5]));

// function removeDuplicate2(arr) {
//     let j = 1;
//     for (let i = 0; i < arr.length - 1; ++i) {
//         if (arr[i] === arr[j]) {
//             arr.pop();
//             j++;
//         }
//     }


//     return arr;
// }

// console.log(removeDuplicate2([1,2,2,3,4]));