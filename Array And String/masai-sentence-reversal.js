let str = "A Transformation in Education";
let arr = str.split(" ");

let bag = "";
for(let i = arr.length-1; i >= 0; i--){
    bag += arr[i] + " ";
}

console.log(bag);