function majorityElement(arr) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        let count = 0;
        for (let j = 0; j < arr.length; ++j) {
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



// console.log(majorityElement(arr2));


// arr = [3, 5, 1, 7, 9]
// target = 10


function majorityEle(arr){
    let majorElement = new Map();
    for(let i = 0;i<arr.length;++i){
        majorElement.set(arr[i],(majorElement.get(arr[i]) || 0) + 1);  
        if(majorElement.get(arr[i]) > arr.length/2){
            return arr[i]
        }
    }
    
    return null;
}

console.log(majorityEle([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5]))




function majorelement(arr){
    let el ;
    let count = 0;
    for(let val of arr){
        if(count === 0){
            count = 1;
            el = val;
        }
        else if(el === val){
            count++;
        }
        else{
            count--;
        }
    }
    console.log(el)//in 1st loop we are getting the element which have maximum count
    let count1 = 0;
    for(let val of arr){
        if(val === el){
            count1++;//in 2nd loop we are gatting the count of that element which is maximum in count
        }
    }
    if(count1>Math.floor(arr.length/2)){
        return el;
    }
    return -1;
}

console.log(majorelement([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5]))