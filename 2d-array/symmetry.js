var mat = [["*", ".", "*", ".", "*", "."],
           [".", ".", "*", "*", ".", "*"],
           [".", ".", ".", "*", "*", "*"],
           [".", ".", ".", "*", "*", "*"],
           [".", ".", "*", "*", ".", "*"],
           ["*", ".", "*", ".", "*", "."],
          ];
let H = Horizontal(mat, mat.length);
let V = Vertical(mat, mat.length);

if(H == true && V == true){
    console.log("BOTH");
}
else if(H == true && V == false){
    console.log("HORIZONTAL");
}
else if(H == false && V == true){
    console.log("VERTICAL");
}
else{
    console.log("NO")
}

function Horizontal(arr, n){
    let i = 0, j = n-1, k = 0;
    
    while(i < j){

        for(let k=0; k < n; k++){

            if(arr[i][k] != arr[j][k]){
                return false;
            }
        }
        i++;
        j--;
    }
    return true;
}

function Vertical(arr, n){
    let i = 0; j = n-1; k=0;

    while(i < j){

        for(let k = 0; k < n; k++){
            if(arr[k][i] != arr[k][j]){
                return false;
            }
        }
        i++;
        j--;
    }
    return true;
}