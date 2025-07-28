function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (target === arr[mid]) return mid;
    if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([2, 3, 4, 10, 40], 10));

function bubblesort(arr){
    for(let i = 0;i<arr.length-1;++i){
        let swapped = false;
        for(let j = 0;j<arr.length-i-1;++j){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr;
}
console.log(bubblesort([1,3,2,7,4]))

function selectionsort(arr){
    for(let i = 0;i<arr.length-1;++i){
        let minindex = i;
        for(let j = i+1;j<arr.length;++j){
            if(arr[i]>arr[j]) minindex = j;
        }
        if(minindex!= i){
            [arr[i],arr[minindex]] = [arr[minindex],arr[i]];
        }
    }
    return arr;
}

console.log(selectionsort([1,3,2,7,4]))

function insertionsort(arr){
    for(let i = 0;i<arr.length;++i){
        for(let j = i-1;j>0;--j){
            if(arr[j]>arr[i]){
                [arr[i],arr[j]] = [arr[j],arr[i]];
            }
        }
    }
    return arr;
}
console.log(insertionsort([1,3,2,7,4]))

function mergesort(arr){
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergesort(arr.slice(0,mid));
    let right = mergesort(arr.slice(mid));
    return merge(left,right);
}

function merge(left,right){
    let result = [];
    let i = 0;
    let j = 0;
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            result.push(left[i++]);
        }else{
            result.push(right[j++]);
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergesort([1,3,2,7,4]))

function quicksort(arr){
    if(arr.length<=1) return arr;
    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];
    for(let i = 0;i<arr.length-1;++i){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quicksort(left),pivot,...quicksort(right)]
}
console.log(quicksort([1,3,2,7,4]))