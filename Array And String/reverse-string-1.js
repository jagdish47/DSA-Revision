let str = "XYZ";
console.log(reverse(str));

function reverse(str){
    let str2 = "";

    for(let i = str.length-1; i >= 0; i--){
        str2 += str[i];
    }

    return str2;
}

// Time Complexity - O(n)
// Space Complexity - O(n)