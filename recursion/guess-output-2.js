func(3);

function func(n){

    if(n > 0){
        func(n-1);
        console.log(n);
        func(n-1);
    }
}