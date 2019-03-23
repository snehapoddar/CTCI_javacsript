var exports = module.exports = {};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

exports.newNode = function() {
    let node = new ListNode();
    return node;
}

// function to create linkedlist from array of nums
exports.arrayToLL = function(arr) {
    if(arr.length<1) return null;
    let head = new ListNode(arr[0]);
    cur = head;
    for (i = 1; i < arr.length; i++) {
        var newNode = new ListNode(arr[i]);
        cur.next = newNode;
        cur = cur.next;
    }
    return head;
}

exports.insertNodeAtLast = function(head, value){
    const newNode = new ListNode(value);
    if(!head) {
        head = newNode;
        return head;
    }
    let cur = head;
    while(cur.next){
        cur = cur.next;
    }
    cur.next = newNode;
    return head;
}
// function to print linkedlist
exports.printLL = function(head) {
    cur = head;
    while(cur){
        console.log(cur.val);
        cur = cur.next;
    }
}

// function to delete a given value from linked list
exports.deleteNode = function (head, nodeValue) {
    let prev = null;
    let cur = head;
    while(cur) {
        if(cur.val === nodeValue) {
            if(!prev) return cur.next;
            prev.next = cur.next;
        }
        prev = cur;
        cur = cur.next;
    }
    return head;
}

exports.reversell = function(head) {
    if(!head || !head.next) return head;
    let newHead = null;
    let cur = head;
    let next = null
    while(cur) {
        next = cur.next;
        cur.next = newHead;
        newHead = cur;
        cur = next;
    }
    return newHead;
}

exports.llToArray = function (head) {
    let array = [];
    let cur = head;
    while(cur){
        array.push(cur.val);
        cur = cur.next;
    }
    return array;
}