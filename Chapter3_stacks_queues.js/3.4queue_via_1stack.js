//Implement queue using 1 stack
class Queue {
    constructor() {
        this.stack = [];
    }

    enqueue(value) {
        this.stack.push(value);
    }

    dequeue() {
        if(this.isEmpty()) {
            return "no element to dequeue";
        }
        return this.stack.shift();
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
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