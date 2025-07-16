function trappingWater(arr) {
    let res = 0;
    for (let i = 1; i < arr.length - 1; ++i) {
        let left = arr[i];
        for (let j = 0; j < i; ++j) {
            left = Math.max(left, arr[j]);
        }
        let right = arr[i];
        for (let j = i + 1; j < arr.length; ++j) {
            right = Math.max(right, arr[j]);
        }
        res += (Math.min(left, right)) - arr[i];
    }
    return res;
}

console.log(trappingWater([3, 0, 1, 0, 4, 0, 2]));


// index    arr[i]     maxleft                                       max right                               minletright     res
// 1          0        (3,0)3                                        (0,1 to lenght of array) 4               3              3-0 = 3
// 2          1        (from 0 index to 1 means current index) 3     (1, 0 to length of array)4               3              3-1= 2
// 3          0        (from 0 index to 0 means current index) 3     (0, 4 to length of array)4               3              3-0 = 3
// 4          4        (from 0 index to 4 means current index) 4     (4, 0 to length of array)4               4              4-4 = 0
// 5          0        (from 0 index to 0 means current index) 4     (0,0 to length of array) 2               2              2-0 = 2
// total res = 3+2+3+0+2 = 10