class Stack {
    
    // we use array to implementing stack
    constructor(){
        this.item = [];
    }

    push(element){
        this.item.push(element);
    }

    pop(){
        if(this.item.length > 0){
            return this.item.pop();
        }
        else{
            return "Underflow";
        }
    }

    peek() {
        if(this.item.length < 0){
            return "Underflow";
        }
        else{
            return this.item[this.item.length - 1];
        }
    }

    isEmpty() {
        if(this.item.length < 0){
            return true;
        }
        else{
            return false;
        }
    }

    printStack(){
        let str = "";

        for(let i = 0; i <= this.item.length - 1; i++){
            str += this.item[i] +" ";
        }
        return str;
    }

}


let st = new Stack();

st.push(10);
st.push(20);
st.push(50);
st.push(100);

console.log(st.printStack());

st.pop();

console.log(st.printStack());
console.log(st.peek());
