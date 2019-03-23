const ll = require("./ll.js");

const arr = [5,8,5,10,2,1];
const head = ll.arrayToLL(arr);

function partition(head, x) {
    let rightHead = null;
    while(head) {
        if(head.val>=x){
            let cur = head;
            head = head.next;
            rightHead = ll.insertNodeAtLast(rightHead, cur.val);
        } else {
            break;
        }
    }
    if(!head) return rightHead;
    let cur = head;
    let prev = ll.newNode();
    let next = null;
    
    while(cur){
        if(cur.val>=x){
            prev.next = cur.next;
            rightHead = ll.insertNodeAtLast(rightHead, cur.val);
        } else {
            prev = cur;
        }
        cur = cur.next;
    }
    prev.next = rightHead;
    return head;
}
const newHead = partition(head, 5)
ll.printLL(newHead);