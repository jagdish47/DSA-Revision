let arr = [1, 1];
let x = arr.length;
let temp = x * (x+1)/2;

let sum = 0;

for(let i = 0; i < x; i++){
    sum += arr[i];
}
let clone = findDuplicate(arr);

let ans = (temp - (sum - clone));

console.log(ans, clone);



function findDuplicate(arr){
    let duplicate = 0;

    for(let i = 0; i < arr.length; i++){
        let count = 0;

        for(let j = 0; j < arr.length; j++){
            if(arr[i] == arr[j]){
                count++;
            }

            if(count > 1){
                duplicate = arr[i];
            }
        }
    }

    return duplicate;
}
