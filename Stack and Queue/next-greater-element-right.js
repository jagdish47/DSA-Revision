let arr = [13, 7, 6, 12, 10];

for(let i = 0; i < arr.length; i++){
    let available = false;
    for(let j = i+1; j < arr.length; j++){

        if(arr[i] < arr[j]){
            available = true;
            console.log(arr[j]);
            break;
        }

    }

    if(!available){
        console.log(-1);
    }
}