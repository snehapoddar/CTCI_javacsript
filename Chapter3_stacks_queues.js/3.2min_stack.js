class MinStack {
    constructor() {
        this.stack = [];
        this.mins = []; 
        this.minNum = Number.POSITIVE_INFINITY;
    }

    push(value) {
        if (value <= this.minNum) {
            this.mins.push(this.minNum);
            this.minNum = value;
        }
        this.stack.push(value);
    }
    pop() {
        if(this.isEmpty()) return "stack is empty";
        const value = this.stack.pop();
        if (value === this.minNum) {
            this.minNum = this.mins.length>0 ? this.mins.pop() : Number.POSITIVE_INFINITY ;
        }
        return value;
    }

    minimum() {
        return this.minNum;
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size(){
        return this.stack.length;
    }
}
const stack = new MinStack();
console.log("Number popped: " + stack.pop());
stack.push(7);
stack.push(5);
stack.push(3);
console.log("Number popped: " + stack.pop());
console.log("Stack Min: " + stack.minimum());
console.log("Number popped: " + stack.pop());
console.log("Stack Min: " + stack.minimum());
console.log("Stack size: " + stack.size());