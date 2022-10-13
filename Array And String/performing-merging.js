let arr1 = [2, 4, 8, 9, 11];
let n1 = arr1.length;

let arr2 = [1, 3, 6, 12, 14, 16, 18];
let n2 = arr2.length;

let arr3 = [];
merging(arr1, n1, arr2, n2, arr3);

console.log(arr3);

function merging (arr1, n1, arr2, n2, arr3){
    let i = 0, j = 0, k = 0;

    while(j < n1 && j < n2){
        if(arr1[i] < arr2[j]){
            arr3[k] = arr1[i];
            k++;
            i++
        }
        else{
            arr3[k] = arr2[j];
            k++;
            j++;
        }
    }

    // pending elements are there in arr1 [i]
    while(i < n1){
        arr3[k] = arr1[i];
        i++;
        k++;
    }

    // pending elements are there in arr2 [j]
    while(j < n2){
        arr3[k] = arr2[j];
        j++;
        k++;
    }
}