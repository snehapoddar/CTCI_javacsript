const ll = require("./ll.js");

const arr = [1, 2, 3, 1];
const head = ll.arrayToLL(arr);

function removeDups(head) {
    let prev = null;
    let cur = head;
    const set = new Set();
    while(cur) {
        if(set.has(cur.val)) {
            prev.next = cur.next;
        } else {
            set.add(cur.val)
        }
        prev = cur;
        cur = cur.next;
    }
    return head;
}

ll.printLL(head);
const unduplicatedLLHead = removeDups(head)
ll.printLL(unduplicatedLLHead);
