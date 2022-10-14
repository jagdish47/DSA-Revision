let str = "aaa";
let set = new Set();

for(let i = 0; i < str.length; i++){

    let bag = "";
    for(let j = i; j < str.length; j++){

       bag = bag + str[j];
        set.add(bag);
    }
}

for(let item of set){
    console.log(item);
}