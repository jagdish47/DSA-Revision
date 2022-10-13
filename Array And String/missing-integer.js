// you are given an array of N-1 integers and integers are in range of 1 to N. There are no duplicates in the Array. One of the integers is missing in the array. Find the missing integer.

let arr = [6, 1, 2, 4, 5];
console.log(missingElement(arr))

function missingElement(arr){  
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    
    let x = arr.length + 1;
    
    let temp = x*(x+1)/2;

    return temp - sum;
}



