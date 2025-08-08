function countFrequency(arr){
    let obj = {};
    for(let val of arr){
        obj[val] = (obj[val] || 0) + 1;
    }
    return obj;
}

console.log(countFrequency([10,5,10,15,10,5]))

function highestLowestFrequencyElement(arr){
    let obj = {};
    for(let val of arr){
        obj[val] = (obj[val] || 0) + 1;
    }
    let max = 0;
    let min = Infinity;
    let maxElement = null;
    let minElement = null;
    for(let key in obj){
        if(obj[key] > max){
            max = obj[key];
            maxElement = key;
        }
         if(obj[key] < min){
            min = obj[key];
            minElement = key;
        }
    }
    return {maxElement,minElement}
}
console.log(highestLowestFrequencyElement([10,5,10,15,10,5]))