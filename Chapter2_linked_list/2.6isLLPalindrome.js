const ll = require("./ll.js");

const arr = ["a","b","b", "a"];
const head = ll.arrayToLL(arr);
ll.printLL(head);

// Solution 1 - have two pointers cur(jumps 1 step) & runner (jumps 2 steps for every 1 step of cur)
// Good video for explanation - https://www.youtube.com/watch?v=Os5FM4KQtxw
function isPalindrome(head) {
    if(!head) return true;
    let cur = head;
    let runner = head;
    let stack = [];
    while(runner && runner.next){
        stack.push(cur.val)
        cur = cur.next;
        runner = runner.next ? runner.next.next : null;
    }
    cur = runner ? cur.next : cur; // if runner is null its even length else odd
    while(cur) {
        let value = stack.pop();
        if(cur.val!= value) return false;
        cur = cur.next;
    }
    return true;
}

function getMiddleNode(head) {
    
}

console.log(isPalindrome(head));

// Solution 2 - convert LL to array, reverse and compare original array and reversed array
let array = ll.llToArray(head); 
console.log(array == array.reverse());

// Solution 3 - find middle and 