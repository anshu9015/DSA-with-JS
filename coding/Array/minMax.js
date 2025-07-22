const arr = [3, 1, 2, 6, 8];

function minMax(arr) {
  let max = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
}

console.log(minMax(arr));//output: {max: 8, min: 1}


function minMax1(arr){
  if(arr.length === 0) return{max:null,min:null}
  let max = arr[0];
  let min = arr[0];
  for(let i = 1;i<arr.length;++i){
    if(arr[i]>max){
      max = arr[i];
    }
    else if(arr[i]<min){
      min = arr[i];
    }
  }
  return {max,min}
}
console.log(minMax1(arr));