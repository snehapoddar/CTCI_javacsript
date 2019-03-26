const ll = require("./ll.js");

const arr = ["a", "b", "c", "d", "e", "c", "d", "e"];
const head = ll.arrayToLL(arr);
ll.printLL(head);

// Solution1 - This is super easy solution but not good in terms of space complexity
function loopDetection(head) {
    let arr = [];
    let cur = head;
    while (cur) {
        if (arr.includes(cur)) {
            return cur;
        }
        arr.push(cur);
        cur = cur.next;
    }
    return null;
}

// Solution2 - two pointers slow & fast same as palindrome one
function loopDetection(head) {
    let slow = head;
    let fast = head;
    // this loop is to detect is there a loop
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) { // in case of loop slow and fast will point to same loop at somepoint so want to exit
            break;
        }
    }
    // if it exits out of while loop and fast is null then there is no loop
    if (!fast || !fast.next) {
        return null;
    }
    // Start slow again to head where as fast will only move within loop. For once they will point to same place which will be intersection
    let slow = head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return fast;
}
console.log(loopDetection(head));