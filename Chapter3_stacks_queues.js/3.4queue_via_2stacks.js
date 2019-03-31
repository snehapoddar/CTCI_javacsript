//Implement queue using 2 stacks
class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        if(this.isEmpty()) {
            return "no element to dequeue";
        }
        if(this.stack2.length === 0) {
           // if stack2 is empty and stack1 has only 1 element then no need to copy elements to stack2
           if(this.stack1.length === 1) return this.stack1.pop();
           // copy elements to stack2 to get first element in stack1
           while(this.stack1.length) {
                this.stack2.push(this.stack1.pop());
           }
        }
        return this.stack2.pop();
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    size() {
        return this.stack1.length + this.stack2.length;
    }
}

const q = new Queue();
q.enqueue(5);
q.enqueue(7);
console.log(q);
console.log(q.dequeue());
console.log(q);
q.enqueue(3);
console.log(q);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q);