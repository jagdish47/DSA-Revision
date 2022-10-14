// set();
// -The Set object lets you store unique values of any type
// -Set objects are collections of values. A value in the Set may only occur once; it is unique in the Set's collection.

function majorityElement(len, arr){
    let require = Math.floor(arr.length / 2);
    let ans = -1;
    for(let i = 0; i < len; i++){
        let count = 0;
        
        for(let j = 0; j < len; j++){
            if(arr[i] === arr[j]){
                count++;
            }
            if(count > require){
                ans = arr[i];
            }
            
        }
        
    }
    console.log(ans);
}
