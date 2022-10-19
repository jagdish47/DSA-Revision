let n = 5;
console.log(findFactorial(n));


function findFactorial(n){

    if(n == 0){
        return 1;
    }

    return n * findFactorial(n - 1);
}