// smallest element on the top
class SortedStack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        // if stack is empty then just push the elements
        if(this.isEmpty()) {
            this.stack.push(value);
        } else {
            let tempStack = [];
            while(this.stack.length) {
                // if last value of stack is larger than current value then exit the while loop
                if(this.peek()>value) {
                    break;
                }
                // else copy all elements which are smaller than current value in temp stack
                tempStack.push(this.stack.pop());
            }
            this.stack.push(value);
            // copy back the elements which were smaller than current value in original stack
            while(tempStack.length){
                this.stack.push(tempStack.pop());
            }
        }
    }

    pop() {
        if(this.isEmpty()) {
            return "stack is empty. no element to pop"
        }
        return this.stack.pop();
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    peek() {
        return this.stack[this.stack.length-1];
    }
}

const sortedStack = new SortedStack();
console.log("Number popped: " + sortedStack.pop());
sortedStack.push(7);
sortedStack.push(3);
sortedStack.push(5);
console.log(sortedStack);
console.log(sortedStack.pop());