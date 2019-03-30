class SetOfStacks {
    constructor() {
        this.stackArr = [];
        this.currentIndex = -1; // to store current stack index where value should be pushed
        this.maxCapacity = 2;
    }

    push(value) {
        let stack;
        if (this.isEmpty()) {
            // create stack if stackArr is empty
            stack = [];
            this.currentIndex++;
        } else {
            stack = this.stackArr[this.currentIndex];
            if (stack.length >= this.maxCapacity) {
                stack = [];
                this.currentIndex++;
            }
        }
        stack.push(value);
        this.stackArr[this.currentIndex] = stack;
    }

    pop() {
        if (this.isEmpty()) {
            return "No element to pop. SetStack is empty";
        }
        let stack = this.stackArr[this.currentIndex];
        const poppedValue = stack.pop();
        if(stack.length<1){
            this.stackArr.pop(); // popping the empty stack from stackArr
            this.currentIndex --;
        }
        return poppedValue;
    }

    popIndex(index) {
        if (index > this.currentIndex) {
            return "Stack Index doesnt exist";
        }
        if (index == this.currentIndex) {
            this.currentIndex--;
        }
        const poppedStack = this.stackArr[index];
        this.stackArr.splice(index, 1);
        return poppedStack;
    }

    isEmpty(){
        return this.currentIndex<0;
    }
}



const setStack = new SetOfStacks();
console.log("Number popped: " + setStack.popIndex(0));
setStack.push(7);
setStack.push(5);
setStack.push(3);
console.log(setStack.stackArr);
console.log(setStack.popIndex(1));
console.log(setStack.stackArr);
setStack.push(3);
setStack.push(4);
setStack.push(5);
console.log(setStack.stackArr);
console.log(setStack.pop());
console.log(setStack.stackArr);
console.log(setStack.pop());
console.log(setStack.stackArr);
console.log(setStack.pop());
console.log(setStack.stackArr);
console.log(setStack.pop());
console.log(setStack.stackArr);
console.log(setStack.pop());
console.log(setStack.stackArr);
console.log(setStack.pop());
console.log(setStack.stackArr);