let str = "abcdefg";
console.log(reverse(str));

function reverse(str){
    // console.log(Math.floor(str.length/2))
    let start = 0;
    let end = str.length - 1;
    while(start <= end){
        
        let temp = str[start];
        str[start] = str[end];
        str[end] = temp;

        start++;
        end--;
    }
    console.log(str)
}

// time complexity = O(n);
// space complexity = O(1); in-place space complexity

