let arr = [2, -4, 6, 8, -9];
console.log(arrayToString(arr));
console.log(another(arr));

function arrayToString(arr){
    let temp = "";

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            temp += "0";
        }
        else{
            temp += arr[i];
        }
    }

    return temp;
}


function another(arr){
    str = arr.join("");
    return str;
}