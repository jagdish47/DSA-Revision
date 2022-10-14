let str = "aabcb";
let n = str.length;
let arr = str.split("  ");

console.log(minAdjSwaps(arr, n))

function minAdjSwaps(arr, n){
    let count = 0;

    for(let i = 0; i < Math.floor(n/2); i++){
        let left = i;
        let right = n - left - 1;

        while(left < right){

            if(arr[left] == arr[right]){
                break;
            }
            else{
                right--;
            }
        }

        if(left == right){
            return -1;
        }
        else{
            for(j = right; j < n-left-1; j++){
                // swap(arr[j], arr[j+1])
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j] = temp;
                count++;
            }
        }
    }

    return count;
}

// function swap(x, y){
//     let temp = x;
//     x = y;
//     y = temp;
// }