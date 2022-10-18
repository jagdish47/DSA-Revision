let arr = [100, 80, 60, 70, 60, 75, 85];


for(let i = arr.length - 1; i >= 0; i--){
    count = 0;
    for(let j = i; j >= 0; j--){
        
        if(arr[i] >= arr[j]){
            count++;
        }
        else if(arr[i] < arr[j]){
            // count++;
            break;
        }
    }

    console.log(count);
}